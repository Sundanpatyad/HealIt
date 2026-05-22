# Local release builds

Requires Node.js, npm/pnpm, Xcode (iOS), and a paid **Apple Developer** account for device installs.

## iOS IPA (install on real devices)

Your last build used **`development`** export. That IPA is only for installing through **Xcode**, not by tapping the file on the phone. That is why iOS shows **“app integrity could not be verified”**.

Use **Ad Hoc** for registered test devices:

```bash
APPLE_TEAM_ID=KZKUS3ASDC npm run export:ipa
```

(`export:ipa` now defaults to **ad-hoc**.)

Output: `dist/ios/Healit.ipa`

### Before you install

1. **Register the device**  
   [developer.apple.com](https://developer.apple.com/account/resources/devices/list) → **Devices** → add the iPhone/iPad **UDID**  
   (Xcode → Window → Devices and Simulators → select device → copy Identifier, or find UDID in Finder when device is connected.)

2. **Rebuild** after adding new devices (so the provisioning profile includes them).

3. **Install the IPA with Xcode** (recommended)  
   - Connect the device  
   - Xcode → **Window** → **Devices and Simulators**  
   - Select the device → **+** under *Installed Apps* → choose `dist/ios/Healit.ipa`  

   Do **not** expect tapping the IPA in **Files** or **AirDrop** to work reliably.

4. **Trust the developer** (if the app opens then closes)  
   On the iPhone: **Settings** → **General** → **VPN & Device Management** → your team → **Trust**.

### Other export types

| Command | Use case |
|--------|----------|
| `npm run export:ipa` | Ad Hoc — registered devices (default) |
| `npm run export:ipa:testflight` | App Store / TestFlight upload |
| `IOS_EXPORT_METHOD=debugging npm run export:ipa` | Dev-only, Xcode install |

## Android APK

```bash
npm run export:apk
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

## Notes

- Project paths with **spaces** build from `/tmp/ExpoNavAppLocalBuildCopy`; the IPA is copied to `dist/ios/`.
- Uses `pnpm` when installed; otherwise `npx expo`.
- A **Release build** runs before **archive** (React Native codegen).

## Troubleshooting

**Integrity could not be verified** — Wrong IPA type or install method. Rebuild with Ad Hoc (above) and install via Xcode, after registering the device UDID.

**Cannot find module @urql/core** — Script reinstalls deps in the temp copy; run `pnpm install` in the project if needed.

**Unable to resolve /tmp/.../index.ts** — Fixed via `ENTRY_FILE=index.ts` in `ios/.xcode.env.local`.

**ReactCodegen .cpp not found** — Run `rm -rf ~/Library/Developer/Xcode/DerivedData/ExpoNavApp-*` and rebuild.
