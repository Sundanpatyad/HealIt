import type { ReactNode } from 'react';

import { GradientScreenWrapper } from '../layout/GradientScreenWrapper';

type Props = {
  children: ReactNode;
};

/** Onboarding canvas — same lilac → white gradient as login. */
export function OnboardingScreenWrapper({ children }: Props) {
  return (
    <GradientScreenWrapper gradient="loginBackground">{children}</GradientScreenWrapper>
  );
}
