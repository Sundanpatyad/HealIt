import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, type ViewProps } from 'react-native';

import { GlassPlate } from '../GlassPlate';

import type { IllustrationViewport } from './types';
import { borderWidth, radii } from '../../../theme/borders';
import { colors } from '../../../theme/colors';
import { sizes } from '../../../theme/sizes';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

const CARD_PAD = spacing.formularyChipPad;

/** Layered formulary tiles mirroring onboarding slide 02. */
export function MedicineCatalogIllustration({ viewportWidth }: IllustrationViewport) {
  const width = Math.min(
    viewportWidth - spacing.screenHorizontal * 2 - spacing.illusCatalogGutter,
    300,
  );

  return (
    <View style={[styles.root, { width }]}>
      <GlassPlate style={[styles.cardLight, { width }]} intensity={34}>
        <View style={styles.cardHeader}>
          <Text style={[typography.subtitle, styles.cardTitleUpper]} numberOfLines={2}>
            Amoxicillin capsules
          </Text>
          <Ionicons
            name="medkit-outline"
            size={sizes.illustration.formularyLeadingIcon}
            color={colors.brand.violet}
          />
        </View>
        <Text style={[typography.subtitle, styles.darkPrice]} numberOfLines={1}>
          ₹135
        </Text>
        <Ionicons
          style={[styles.absoluteIcon, styles.topRightAccent]}
          name="sparkles-outline"
          size={sizes.illustration.sparkleGlyph}
          color={colors.text.secondary}
        />
      </GlassPlate>

      <View style={[styles.heroWrap, { width }]}>
        <View style={[styles.heroSolid, { width }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.heroTitleText} numberOfLines={2}>
              Atorvastatin tablets
            </Text>
            <Ionicons
              name="pulse-outline"
              size={sizes.illustration.formularyLeadingIcon}
              color={colors.surface.white}
            />
          </View>
          <Text style={styles.heroPrice}>₹299</Text>
        </View>
        <FloatingTag label="FAST" variant="accent" />
      </View>

      <GlassPlate style={[styles.cardLightBottom, { width }]} intensity={34}>
        <View style={styles.cardHeader}>
          <Text style={[typography.subtitle, styles.cardTitleUpper]} numberOfLines={2}>
            Lisinopril tablets
          </Text>
          <Ionicons
            name="heart-outline"
            size={sizes.illustration.formularyLeadingIcon}
            color={colors.brand.violetDark}
          />
        </View>
        <Text style={[typography.subtitle, styles.darkPrice]} numberOfLines={1}>
          ₹110
        </Text>
        <Ionicons
          style={[styles.absoluteIcon, styles.midLeftAccent]}
          name="cash-outline"
          size={sizes.illustration.formularyAccessory}
          color={colors.text.secondary}
        />
      </GlassPlate>

      <FloatingTag label="+ Add" variant="muted" style={styles.plusTag} />
    </View>
  );
}

function FloatingTag({
  label,
  variant,
  style,
}: {
  label: string;
  variant: 'accent' | 'muted';
  style?: ViewProps['style'];
}) {
  return (
    <View
      pointerEvents="none"
      style={[
        styles.floatingBadge,
        variant === 'accent' ? styles.floatingAccent : styles.floatingMuted,
        style,
      ]}>
      <Text style={variant === 'accent' ? styles.floatingAccentLabel : styles.floatingMutedLabel}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.formularyCardPadY,
    minHeight: 320,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
    justifyContent: 'center',
  },
  cardLight: {
    borderRadius: radii.glassPlate,
    paddingVertical: spacing.formularyCardPadY,
    paddingHorizontal: CARD_PAD,
    transform: [{ rotateZ: '-2deg' }],
  },
  cardLightBottom: {
    borderRadius: radii.glassPlate,
    paddingVertical: spacing.formularyCardPadY,
    paddingHorizontal: CARD_PAD,
    transform: [{ rotateZ: '2deg' }],
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  cardTitleUpper: {
    flex: 1,
    marginRight: spacing.xxs,
    fontWeight: '600',
    color: colors.text.primary,
    textTransform: 'capitalize',
    fontSize: 16,
  },
  darkPrice: { fontWeight: '700', color: colors.brand.violetDark, fontSize: 17 },
  heroWrap: {
    marginVertical: -spacing.sm,
    zIndex: 2,
  },
  heroSolid: {
    backgroundColor: colors.brand.violetDark,
    borderRadius: radii.illustrationCard,
    paddingVertical: spacing.lg + spacing.micro,
    paddingHorizontal: CARD_PAD,
    shadowColor: colors.overlays.tinyShadowPurple,
    shadowOffset: { width: 0, height: spacing.md - 4 },
    shadowOpacity: 0.45,
    shadowRadius: spacing.md + 4,
    elevation: 8,
    marginVertical: spacing.xs,
    borderWidth: borderWidth.hairline,
    borderColor: colors.overlays.white18,
  },
  heroTitleText: {
    flex: 1,
    marginRight: spacing.sm,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    color: colors.surface.white,
    textTransform: 'capitalize',
  },
  heroPrice: { fontSize: 18, fontWeight: '700', color: colors.overlays.deepPrice },
  absoluteIcon: {
    position: 'absolute',
  },
  topRightAccent: {
    top: -spacing.xxs,
    right: -spacing.sm + spacing.micro,
  },
  midLeftAccent: {
    left: -spacing.lg - spacing.micro,
    top: '50%',
    marginTop: -(spacing.sm - spacing.micro),
  },
  floatingBadge: {
    position: 'absolute',
    top: -spacing.sm - spacing.micro,
    right: -spacing.lg + spacing.micro,
    borderRadius: radii.badge,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderWidth: borderWidth.hairline,
    borderColor: colors.overlays.white45,
    transform: [{ rotateZ: '-4deg' }],
  },
  floatingAccent: {
    backgroundColor: colors.surface.frostedPurple,
    borderColor: colors.brand.violet,
    elevation: 2,
    shadowColor: colors.overlays.flatBlackRipple,
    shadowOffset: { width: 0, height: spacing.xs - spacing.micro },
    shadowOpacity: 0.12,
    shadowRadius: spacing.sm - spacing.micro,
  },
  floatingMuted: {
    backgroundColor: colors.overlays.white96,
    borderColor: colors.overlays.lilacHairline,
    elevation: 3,
    shadowOpacity: 0,
  },
  floatingAccentLabel: {
    fontWeight: '700',
    color: colors.brand.violet,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  floatingMutedLabel: {
    fontWeight: '600',
    color: colors.text.secondary,
    fontSize: 12,
  },
  plusTag: {
    position: 'absolute',
    bottom: spacing.xxl,
    left: '-8%',
    transform: [{ rotateZ: '-4deg' }],
  },
});
