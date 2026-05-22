import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import { CtaButton } from '../../components/buttons/CtaButton';
import { PaginationDots } from '../../components/indicators/PaginationDots';
import { OnboardingIllustrationCarousel } from '../../components/onboarding/OnboardingIllustrationCarousel';
import { OnboardingScreenWrapper } from '../../components/onboarding/OnboardingScreenWrapper';
import { OnboardingSlideLayout } from '../../components/onboarding/OnboardingSlideLayout';
import {
  ONBOARDING_SLIDES,
  type OnboardingSlideModel,
} from '../../constants/onboardingSlides';
import type { RootStackParamList } from '../../navigation/types';
import { writeOnboardingComplete } from '../../services/onboardingStorage';
import { colors, spacing } from '../../theme';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export function OnboardingScreen() {
  const navigation = useNavigation<Nav>();
  const { width } = useWindowDimensions();
  const slides: readonly OnboardingSlideModel[] = ONBOARDING_SLIDES;

  const [activeIndex, setActiveIndex] = useState(0);
  const [finishing, setFinishing] = useState(false);

  const slide = slides[activeIndex];
  const illustrationWidth = width - spacing.screenHorizontal * 2;
  const isFinal = activeIndex === slides.length - 1;

  const goNext = async () => {
    if (activeIndex >= slides.length - 1) {
      setFinishing(true);
      try {
        await writeOnboardingComplete();
        navigation.replace('Login');
      } finally {
        setFinishing(false);
      }
      return;
    }
    setActiveIndex((i) => i + 1);
  };

  return (
    <OnboardingScreenWrapper>
      <View style={styles.sheet}>
        <OnboardingSlideLayout
          illustration={
            <OnboardingIllustrationCarousel
              slides={slides}
              activeIndex={activeIndex}
              pageWidth={illustrationWidth}
              viewportWidth={width}
            />
          }
          title={slide.title}
          titleHighlight={slide.titleHighlight}
          subtitle={slide.subtitle}
          footer={
            <View style={styles.footerInner}>
              <PaginationDots activeIndex={activeIndex} total={slides.length} />
              <CtaButton
                title={isFinal ? 'Get started' : 'Next'}
                onPress={() => void goNext()}
                disabled={finishing}
              />
            </View>
          }
        />

        {finishing ? (
          <View style={styles.savingShield} accessibilityLabel="Completing onboarding">
            <ActivityIndicator color={colors.brand.violet} />
          </View>
        ) : null}
      </View>
    </OnboardingScreenWrapper>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1 },
  footerInner: {
    gap: spacing.onboardingFooterBetween,
    width: '100%',
  },
  savingShield: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlays.veil35,
  },
});
