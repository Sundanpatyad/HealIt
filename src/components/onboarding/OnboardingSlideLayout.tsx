import type { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeroMergeHeader } from '../layout/HeroMergeHeader';
import { colors, spacing, typography } from '../../theme';

type Props = {
  illustration: ReactElement | null;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  footer: ReactElement | null;
};

/**
 * Onboarding scaffold — hero merge + logo (login parity), white body below.
 */
export function OnboardingSlideLayout({
  illustration,
  title,
  titleHighlight,
  subtitle,
  footer,
}: Props) {
  const titleParts =
    titleHighlight && title.includes(titleHighlight)
      ? title.split(titleHighlight)
      : null;

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <HeroMergeHeader>{illustration}</HeroMergeHeader>

        <View style={styles.bodySheet}>
          <View style={styles.copy}>
            {titleParts ? (
              <View style={styles.titleWrap}>
                <Text style={styles.title}>{titleParts[0]}</Text>
                <View style={styles.titlePill}>
                  <Text style={[styles.title, styles.titlePillText]}>{titleHighlight}</Text>
                </View>
                <Text style={styles.title}>{titleParts[1]}</Text>
              </View>
            ) : (
              <Text style={styles.title}>{title}</Text>
            )}
            <Text style={[typography.subtitle, styles.subtitle]}>{subtitle}</Text>
          </View>

          <View style={styles.footer}>{footer}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: {
    flex: 1,
  },
  bodySheet: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.surface.white,
    paddingHorizontal: spacing.screenHorizontal,
    paddingTop: spacing.xxs,
    paddingBottom: spacing.md,
    justifyContent: 'space-between',
  },
  copy: {
    gap: spacing.sm,
    paddingTop: spacing.xs,
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    ...typography.headline,
    textAlign: 'center',
  },
  titleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    zIndex: 1000,
  },
  titlePill: {
    backgroundColor: '#4328A9',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 4,
  },
  titlePillText: {
    color: colors.text.onBrand,
  },
  subtitle: {
    maxWidth: '100%',
    textAlign: 'center',
  },
  footer: {
    gap: spacing.lg,
    paddingTop: spacing.md,
    alignItems: 'stretch',
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
});
