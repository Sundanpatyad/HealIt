import type { ReactElement } from 'react';

import { Onboarding1Illustration } from '../components/onboarding/illustrations/Onboarding1Illustration';
import { Onboarding2Illustration } from '../components/onboarding/illustrations/Onboarding2Illustration';
import { VerifiedMedicineIllustration } from '../components/onboarding/illustrations/VerifiedMedicineIllustration';

export type OnboardingSlideModel = Readonly<{
  id: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  renderIllustration: (viewportWidth: number) => ReactElement;
}>;

/** Declarative copy map — onboarding screen reads this list only (ISP / OCP-friendly). */
export const ONBOARDING_SLIDES: readonly OnboardingSlideModel[] = [
  {
    id: 'medicine-network',
    title: 'Medicines Delivered Fast.',
    titleHighlight: 'Delivered',
    subtitle: 'From nearby trusted stores — in minutes.',
    renderIllustration: (w) => <Onboarding1Illustration viewportWidth={w} />,
  },
  {
    id: 'urgent-care',
    title: "When health can't wait.",
    titleHighlight: 'health',
    subtitle: "Instant relief for life's sudden urgencies.",
    renderIllustration: (w) => <Onboarding2Illustration viewportWidth={w} />,
  },
  {
    id: 'verified-stores',
    title: 'Genuine meds, Verified stores.',
    titleHighlight: 'Verified',
    subtitle: 'Safe. Reliable. Always there for you.',
    renderIllustration: (w) => <VerifiedMedicineIllustration viewportWidth={w} />,
  },
];
