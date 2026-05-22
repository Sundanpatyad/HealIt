#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_NAME="${IOS_SCHEME:-ExpoNavApp}"
# ad-hoc = install on registered iPhones/iPads (not via tapping IPA in Files)
EXPORT_METHOD="${IOS_EXPORT_METHOD:-ad-hoc}"
BUILD_ROOT="$ROOT_DIR"

run_expo() {
  if command -v pnpm >/dev/null 2>&1; then
    pnpm exec expo "$@"
  elif command -v npx >/dev/null 2>&1; then
    npx expo "$@"
  else
    echo "Need pnpm or npm (npx) on PATH to run Expo CLI."
    exit 1
  fi
}

install_dependencies() {
  echo "Installing JavaScript dependencies (pnpm symlinks cannot be rsync'd)..."
  if command -v pnpm >/dev/null 2>&1; then
    pnpm install --frozen-lockfile
  elif command -v npm >/dev/null 2>&1; then
    if [[ -f package-lock.json ]]; then
      npm ci
    else
      npm install
    fi
  else
    echo "Need pnpm or npm to install dependencies in the build directory."
    exit 1
  fi
}

RSYNC_EXCLUDES=(
  --exclude ".git"
  --exclude "node_modules"
  --exclude ".expo"
  --exclude "android/app/build"
  --exclude "dist"
  --exclude "ios/build"
  --exclude "ios/Pods"
  --exclude "ios/DerivedData"
)

if [[ "$ROOT_DIR" =~ [[:space:]] ]]; then
  BUILD_ROOT="/tmp/ExpoNavAppLocalBuildCopy"
  echo "Project path contains spaces. Building from temporary no-space copy:"
  echo "  $BUILD_ROOT"
  echo "Syncing project source (may take a minute)..."
  rm -rf "$BUILD_ROOT"
  mkdir -p "$BUILD_ROOT"
  rsync -a --delete "${RSYNC_EXCLUDES[@]}" "$ROOT_DIR/" "$BUILD_ROOT/"
  echo "Sync complete."
  cd "$BUILD_ROOT"
  install_dependencies
fi

ARCHIVE_PATH="$BUILD_ROOT/ios/build/$APP_NAME.xcarchive"
EXPORT_DIR="$BUILD_ROOT/dist/ios"
EXPORT_OPTIONS_PLIST="$EXPORT_DIR/ExportOptions.plist"

cd "$BUILD_ROOT"

if [[ -z "${APPLE_TEAM_ID:-}" ]]; then
  echo "Missing APPLE_TEAM_ID."
  echo
  echo "iOS archive signing needs your Apple Developer Team ID."
  echo "Run:"
  echo "  APPLE_TEAM_ID=YOUR_TEAM_ID npm run export:ipa"
  echo
  echo "You can find it in Apple Developer > Membership details, or in Xcode under your account/team."
  exit 1
fi

echo "Generating iOS native project..."
run_expo prebuild --platform ios

IOS_DIR="$BUILD_ROOT/ios"
NODE_BINARY="$(command -v node)"

# Metro export:embed breaks when Xcode resolves ENTRY_FILE to an absolute /tmp path.
ENTRY_FILE="index.ts"
if [[ -f "$BUILD_ROOT/node_modules/expo/scripts/resolveAppEntry.js" ]]; then
  RESOLVED_ENTRY="$("$NODE_BINARY" "$BUILD_ROOT/node_modules/expo/scripts/resolveAppEntry.js" "$BUILD_ROOT" ios relative 2>/dev/null | tail -n 1 || true)"
  if [[ -n "$RESOLVED_ENTRY" ]]; then
    ENTRY_FILE="$RESOLVED_ENTRY"
  fi
fi
cat > "$IOS_DIR/.xcode.env.local" <<EOF
export NODE_BINARY=$NODE_BINARY
export ENTRY_FILE=$ENTRY_FILE
EOF
echo "Using ENTRY_FILE=$ENTRY_FILE for Release bundle (relative path for Metro)."
DERIVED_DATA="$IOS_DIR/DerivedData"
WORKSPACE="$IOS_DIR/$APP_NAME.xcworkspace"

echo "Installing CocoaPods..."
export LANG="${LANG:-en_US.UTF-8}"
export LC_ALL="${LC_ALL:-en_US.UTF-8}"
(cd "$IOS_DIR" && pod install)

echo "Clearing local DerivedData for this build..."
rm -rf "$DERIVED_DATA" 2>/dev/null || true
# Best-effort: global cache may be locked while Xcode is open — do not fail the IPA build on this.
rm -rf "${HOME}/Library/Developer/Xcode/DerivedData/${APP_NAME}-"* 2>/dev/null || true

mkdir -p "$EXPORT_DIR"

XCODE_BUILD_ARGS=(
  -workspace "$WORKSPACE"
  -scheme "$APP_NAME"
  -configuration Release
  -sdk iphoneos
  -destination "generic/platform=iOS"
  -derivedDataPath "$DERIVED_DATA"
  -allowProvisioningUpdates
  DEVELOPMENT_TEAM="$APPLE_TEAM_ID"
)

echo "Release build (generates React Native codegen before archive)..."
xcodebuild "${XCODE_BUILD_ARGS[@]}" build

echo "Archiving iOS app locally..."
xcodebuild "${XCODE_BUILD_ARGS[@]}" \
  -archivePath "$ARCHIVE_PATH" \
  archive

# Xcode 16+ renamed "development" → "debugging"
XCODE_EXPORT_METHOD="$EXPORT_METHOD"
if [[ "$XCODE_EXPORT_METHOD" == "development" ]]; then
  XCODE_EXPORT_METHOD="debugging"
fi

cat > "$EXPORT_OPTIONS_PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>method</key>
  <string>$XCODE_EXPORT_METHOD</string>
  <key>teamID</key>
  <string>$APPLE_TEAM_ID</string>
  <key>signingStyle</key>
  <string>automatic</string>
  <key>compileBitcode</key>
  <false/>
  <key>thinning</key>
  <string>&lt;none&gt;</string>
</dict>
</plist>
EOF

echo "Exporting IPA (method: $XCODE_EXPORT_METHOD, team: $APPLE_TEAM_ID)..."
xcodebuild \
  -exportArchive \
  -archivePath "$ARCHIVE_PATH" \
  -exportPath "$EXPORT_DIR" \
  -exportOptionsPlist "$EXPORT_OPTIONS_PLIST" \
  -allowProvisioningUpdates

echo
echo "IPA exported to:"
echo "$EXPORT_DIR"

if [[ "$BUILD_ROOT" != "$ROOT_DIR" ]]; then
  mkdir -p "$ROOT_DIR/dist"
  rm -rf "$ROOT_DIR/dist/ios"
  cp -R "$EXPORT_DIR" "$ROOT_DIR/dist/ios"
  echo
  echo "IPA copied back to:"
  echo "$ROOT_DIR/dist/ios"
fi

IPA_FILE="$(find "$EXPORT_DIR" -maxdepth 1 -name '*.ipa' -print -quit 2>/dev/null || true)"
if [[ -n "$IPA_FILE" ]]; then
  echo
  echo "IPA file: $IPA_FILE"
fi

echo
echo "=== Install on a physical iPhone/iPad ==="
if [[ "$EXPORT_METHOD" == "ad-hoc" ]]; then
  cat <<'EOF'
1. Register each device UDID in Apple Developer → Devices (developer.apple.com).
2. Rebuild this IPA after adding devices (provisioning profile must include them).
3. Install via Xcode: Window → Devices and Simulators → select device → ⊕ → choose the .ipa
   (Do NOT rely on opening the IPA from Files/Mail — iOS often shows "integrity could not be verified".)
4. On the device: Settings → General → VPN & Device Management → trust your developer certificate if prompted.
EOF
elif [[ "$EXPORT_METHOD" == "app-store" ]]; then
  echo "Upload the IPA to App Store Connect / TestFlight (Transporter or Xcode Organizer)."
else
  echo "Development/debugging IPAs are for Xcode install only, not for tapping the IPA on the device."
  echo "For testers, rebuild with: IOS_EXPORT_METHOD=ad-hoc APPLE_TEAM_ID=... npm run export:ipa"
fi
