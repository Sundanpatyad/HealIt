import { BlurView } from 'expo-blur';
import {
  GlassContainer,
  GlassView,
  isGlassEffectAPIAvailable,
  isLiquidGlassAvailable,
} from 'expo-glass-effect';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

const stripColors = ['#6366f1', '#22c55e', '#f97316', '#ec4899', '#0ea5e9'];

/** Android blur is experimental; enable when you accept possible perf tradeoffs */
const ANDROID_BLUR: 'none' | 'dimezisBlurView' =
  Platform.OS === 'android' ? 'dimezisBlurView' : 'none';

export function GlassBlurDemoScreen() {
  const glassApiOk = Platform.OS === 'ios' && isGlassEffectAPIAvailable();

  const glassStatusLines = [
    `Platform: ${Platform.OS}`,
    `GlassEffect API runtime: ${String(isGlassEffectAPIAvailable())}`,
    `Liquid Glass build/system signal: ${String(isLiquidGlassAvailable())}`,
    `Showing native GlassView: ${String(glassApiOk)}`,
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollPad}
      style={styles.scroll}
      nestedScrollEnabled
      keyboardShouldPersistTaps="handled">
      <Text style={styles.lead}>expo-blur + expo-glass-effect</Text>

      <View style={styles.canvas}>
        <View style={styles.stripesBg}>
          {stripColors.map((c, i) => (
            <View
              key={`${i}-${c}`}
              style={[
                styles.stripe,
                { backgroundColor: c, left: `${i * 16}%` },
              ]}
            />
          ))}
          <ImageGradientOverlay />
        </View>

        <BlurView
          intensity={Platform.OS === 'ios' ? 55 : 40}
          tint="systemUltraThinMaterial"
          experimentalBlurMethod={ANDROID_BLUR}
          style={styles.blurCard}>
          <Text style={styles.cardTitle}>BlurView</Text>
          <Text style={styles.cardBody}>
            expo-blur works across iOS, Android (experimental blur), and web
            fallback. Tint uses iOS chrome materials where supported.
          </Text>
        </BlurView>

        {glassApiOk ? (
          <GlassContainer spacing={12} style={styles.glassRow}>
            <GlassView style={styles.glassPill} isInteractive />
            <GlassView
              style={styles.glassPillWide}
              glassEffectStyle="clear"
              tintColor="rgba(255,255,255,0.12)"
              isInteractive
            />
            <GlassView style={styles.glassPill} glassEffectStyle="regular" />
          </GlassContainer>
        ) : (
          <FallbackGlassMock />
        )}

        <View style={styles.statusBox}>
          {glassStatusLines.map((line) => (
            <Text key={line} style={styles.statusLine}>
              {line}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function FallbackGlassMock() {
  return (
    <View style={[styles.glassFallback, styles.glassFallbackBorder]}>
      <Text style={styles.cardTitle}>Glass fallback</Text>
      <Text style={styles.cardBody}>
        Liquid glass / GlassView is only shown when GlassEffect API reports
        available on iOS. On unsupported OS versions you still get expo-blur
        above plus this frosted fallback.
      </Text>
    </View>
  );
}

function ImageGradientOverlay() {
  return (
    <View style={styles.gradientOverlay}>
      {/* Avoid network image + extra deps: solid wash keeps blur/glass saturated */}
      <View style={[styles.overlayPatch, { backgroundColor: 'rgba(147,51,234,0.55)' }]} />
      <View style={[styles.overlayPatch, { backgroundColor: 'rgba(236,72,153,0.35)', top: '40%' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#dfe7f4',
  },
  scrollPad: {
    padding: 20,
    paddingBottom: 40,
    gap: 12,
  },
  lead: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  canvas: {
    minHeight: 420,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#0f172a',
  },
  stripesBg: {
    ...StyleSheet.absoluteFillObject,
  },
  stripe: {
    position: 'absolute',
    width: '30%',
    top: '-10%',
    bottom: '-10%',
    transform: [{ rotate: '14deg' }],
    opacity: 0.92,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayPatch: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '-20%',
    height: '120%',
    opacity: 1,
  },
  blurCard: {
    margin: 20,
    marginTop: 28,
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.35)',
    maxWidth: '92%',
    alignSelf: 'center',
  },
  glassRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 64,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignSelf: 'center',
  },
  glassPill: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  glassPillWide: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    minWidth: 80,
    marginHorizontal: 4,
  },
  glassFallback: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(248,250,252,0.82)',
    maxWidth: '92%',
    alignSelf: 'center',
  },
  glassFallbackBorder: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(15,23,42,0.08)',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#334155',
  },
  statusBox: {
    marginHorizontal: 20,
    marginBottom: 22,
    padding: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.12)',
    gap: 4,
    maxWidth: '92%',
    alignSelf: 'center',
    width: '100%',
  },
  statusLine: {
    fontSize: 12,
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' }),
    color: 'rgba(241,245,249,0.94)',
    lineHeight: 18,
  },
});
