import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_KEYS } from '../constants/storageKeys';

/**
 * Persistence boundary — screens depend on functions, not AsyncStorage keys.
 */
export async function readOnboardingComplete(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.onboardingComplete);
    return value === '1';
  } catch {
    return false;
  }
}

export async function writeOnboardingComplete(): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEYS.onboardingComplete, '1');
}

export async function clearOnboardingComplete(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEYS.onboardingComplete);
}
