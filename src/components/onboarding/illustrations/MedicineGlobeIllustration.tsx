import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { GlassPlate } from '../GlassPlate';

import type { IllustrationViewport } from './types';
import { borderWidth, radii } from '../../../theme/borders';
import { colors } from '../../../theme/colors';
import { sizes } from '../../../theme/sizes';
import { spacing } from '../../../theme/spacing';

/** Dotted atlas + translucent product chips echoing onboarding screen 01. */
export function MedicineGlobeIllustration({ viewportWidth }: IllustrationViewport) {
  const mapDiameter = Math.min(viewportWidth - spacing.screenHorizontal * 2, 320);

  return (
    <View style={styles.root}>
      <View style={[styles.map, { width: mapDiameter, height: mapDiameter * 0.9 }]}>
        {DOT_POSITIONS.map((dot, idx) => (
          <View
            key={`d-${dot.top}-${dot.left}-${idx}`}
            style={[styles.dot, { top: `${dot.top}%`, left: `${dot.left}%` }]}
          />
        ))}

        <GlassPlate style={styles.boxCard} intensity={54}>
          <Ionicons
            name="cube-outline"
            size={sizes.illustration.glyphpProduct}
            color={colors.brand.violet}
          />
          <TinyAvatar offset={{ top: -6, right: -8 }} />
        </GlassPlate>

        <GlassPlate style={styles.bottleCard} intensity={46}>
          <Ionicons
            name="flask-outline"
            size={sizes.illustration.glyphpFlask}
            color={colors.brand.violetDark}
          />
          <TinyAvatar offset={{ top: 14, left: -10 }} />
        </GlassPlate>

        <GlassPlate style={styles.stripCard} intensity={52}>
          <Ionicons
            name="bandage-outline"
            size={sizes.illustration.glyphpProduct}
            color={colors.brand.violet}
          />
          <TinyAvatar offset={{ bottom: -6, right: -14 }} />
        </GlassPlate>
      </View>
    </View>
  );
}

function TinyAvatar({ offset }: { offset: Record<string, number> }) {
  const a = sizes.illustration.tinyAvatar;
  return (
    <View style={[styles.avatar, { width: a, height: a, borderRadius: a / 2 }, offset]}>
      <Ionicons name="person" size={sizes.illustration.tinyAvatarGlyph} color={colors.text.onBrand} />
    </View>
  );
}

const DOT_POSITIONS = [
  { top: 6, left: 12 },
  { top: 9, left: 32 },
  { top: 5, left: 55 },
  { top: 12, left: 72 },
  { top: 20, left: 20 },
  { top: 18, left: 45 },
  { top: 16, left: 70 },
  { top: 30, left: 10 },
  { top: 28, left: 60 },
  { top: 36, left: 32 },
  { top: 40, left: 50 },
  { top: 48, left: 16 },
  { top: 50, left: 70 },
  { top: 58, left: 40 },
  { top: 64, left: 15 },
  { top: 70, left: 62 },
];

const styles = StyleSheet.create({
  root: { alignItems: 'center', width: '100%' },
  map: {
    position: 'relative',
    overflow: 'visible',
    borderRadius: radii.mapBlob,
    backgroundColor: colors.illustrations.mapWash,
    borderWidth: borderWidth.hairline,
    borderColor: colors.illustrations.mapBorder,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    width: sizes.illustration.mapDot,
    height: sizes.illustration.mapDot,
    borderRadius: sizes.illustration.mapDot / 2,
    backgroundColor: colors.illustrations.dot,
    marginLeft: -(sizes.illustration.mapDot / 2),
    marginTop: -(sizes.illustration.mapDot / 2),
  },
  boxCard: {
    position: 'absolute',
    top: '18%',
    left: '8%',
    width: 118,
    height: 118,
    borderRadius: radii.illustrationCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottleCard: {
    position: 'absolute',
    bottom: '20%',
    right: '14%',
    width: 118,
    height: 132,
    borderRadius: radii.illustrationCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stripCard: {
    position: 'absolute',
    top: '52%',
    left: '32%',
    width: 150,
    height: 112,
    borderRadius: radii.illustrationCard,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateZ: '-10deg' }],
  },
  avatar: {
    position: 'absolute',
    backgroundColor: colors.brand.violet,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.illustrations.avatarGlow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: spacing.xs / 2,
    elevation: 2,
    borderWidth: borderWidth.hairline,
    borderColor: colors.illustrations.pillHighlight,
  },
});
