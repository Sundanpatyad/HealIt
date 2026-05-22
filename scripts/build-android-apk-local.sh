#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

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

echo "Generating Android native project..."
run_expo prebuild --platform android

echo "Building release APK locally..."
cd "$ROOT_DIR/android"
./gradlew assembleRelease

APK_PATH="$ROOT_DIR/android/app/build/outputs/apk/release/app-release.apk"
echo
echo "APK created at:"
echo "$APK_PATH"
