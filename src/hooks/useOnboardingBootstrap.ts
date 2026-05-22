import { useEffect, useState } from 'react';

import { readOnboardingComplete } from '../services/onboardingStorage';

type Bootstrap =
  | { status: 'loading' }
  | { status: 'ready'; onboardingComplete: boolean };

/** Loads onboarding flag exactly once — avoids mismatched Navigator initial routes. */
export function useOnboardingBootstrap(): Bootstrap {
  const [state, setState] = useState<Bootstrap>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    readOnboardingComplete()
      .then((completed) => {
        if (!cancelled) setState({ status: 'ready', onboardingComplete: completed });
      })
      .catch(() => {
        if (!cancelled)
          setState({ status: 'ready', onboardingComplete: false });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
