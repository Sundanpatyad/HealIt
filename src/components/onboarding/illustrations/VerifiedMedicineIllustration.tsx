import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import { GlassPlate } from '../GlassPlate';

import type { IllustrationViewport } from './types';
import { borderWidth, radii } from '../../../theme/borders';
import { colors } from '../../../theme/colors';
import { gradients } from '../../../theme/gradients';
import { sizes } from '../../../theme/sizes';
import { spacing } from '../../../theme/spacing';

/** Overlapping assurance cards resembling onboarding slide 03. */
export function VerifiedMedicineIllustration({ viewportWidth }: IllustrationViewport) {
  const width = Math.min(
    viewportWidth - spacing.screenHorizontal * 2 - spacing.illusInsetFromEdges,
    300,
  );

  return (
    <View style={[styles.root, { width: width + spacing.illusStackBleed }]}>
      <GlassPlate style={[styles.backCard, { width }]} intensity={42}>
        <LinearGradient colors={[...gradients.verifiedCards.back]} style={styles.gradientFill} />
      </GlassPlate>

      <GlassPlate style={[styles.frontCard, { width }]} intensity={54}>
        <LinearGradient colors={[...gradients.verifiedCards.front]} style={styles.gradientFill}>
          <View style={styles.pillRibbon}>
            <View style={[styles.fakePill, styles.pillMuted]} />
            <View style={[styles.fakePill, styles.pillAccent]} />
            <View style={[styles.fakePill, styles.pillMuted]} />
          </View>
        </LinearGradient>
      </GlassPlate>

      <View style={[styles.badgeVerified, styles.badgeElevated]} accessibilityLabel="Verified">
        <Ionicons
          name="shield-checkmark"
          size={sizes.icons.verifiedBadge}
          color={colors.text.onBrand}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    minHeight: 320,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  backCard: {
    position: 'absolute',
    top: spacing.xl + 14,
    left: spacing.sm,
    height: 200,
    borderRadius: radii.verifiedBackdrop,
    padding: spacing.xxs + spacing.micro,
    transform: [{ rotateZ: '-5deg' }],
    overflow: 'hidden',
    borderWidth: borderWidth.hairline,
    borderColor: colors.illustrations.haloVioletSoft,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.illustrations.glassBackTint,
  },
  frontCard: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.md,
    height: 226,
    borderRadius: radii.verifiedForeground,
    padding: spacing.sm + spacing.micro,
    transform: [{ rotateZ: '-2deg' }],
    overflow: 'hidden',
    backgroundColor: colors.illustrations.glassFrontTint,
    borderWidth: borderWidth.hairline,
    borderColor: colors.illustrations.haloViolet,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.illustrations.deepCanvas,
    shadowOffset: { width: 0, height: spacing.md },
    shadowOpacity: 0.32,
    shadowRadius: 18,
    elevation: 10,
  },
  gradientFill: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    borderRadius: radii.glassPlate,
    padding: spacing.sm,
  },
  pillRibbon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    marginBottom: spacing.md,
    columnGap: spacing.xs,
    rowGap: spacing.xs,
    flexWrap: 'wrap',
  },
  fakePill: {
    flex: 1,
    borderRadius: radii.illusPillow,
    minWidth: 44,
    minHeight: 70,
    backgroundColor: colors.illustrations.pillTrack,
    borderWidth: borderWidth.hairline,
    borderColor: colors.illustrations.haloVioletSoft,
    marginHorizontal: 3,
    marginVertical: spacing.xxs,
  },
  pillMuted: {},
  pillAccent: {
    backgroundColor: colors.illustrations.pillWhite,
    minHeight: 88,
    borderColor: colors.overlays.lilacAccent,
    shadowOpacity: 0.2,
    shadowColor: colors.illustrations.shadowBlackIos,
    shadowOffset: { width: 0, height: spacing.xs / 2 },
    shadowRadius: spacing.sm / 2,
    elevation: 4,
    transform: [{ translateY: -(spacing.sm + spacing.micro) }],
    borderWidth: borderWidth.emphasize,
  },
  badgeVerified: {
    position: 'absolute',
    bottom: spacing.xxl,
    left: spacing.md,
    width: sizes.illustration.verifiedSeal,
    height: sizes.illustration.verifiedSeal,
    borderRadius: sizes.illustration.verifiedSeal / 2,
    backgroundColor: colors.brand.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: borderWidth.hairline,
    borderColor: colors.overlays.white50,
    shadowColor: colors.illustrations.badgeShadow,
    shadowOffset: { width: 0, height: spacing.xs / 2 + spacing.micro },
    shadowOpacity: 0.35,
    shadowRadius: spacing.sm,
    elevation: 12,
    transform: [{ rotateZ: '6deg' }],
  },
  badgeElevated: { zIndex: 4 },
});
