import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { LoginHeroCards } from '../../components/auth/LoginHeroCards';
import { CtaButton } from '../../components/buttons/CtaButton';
import { OutlineAuthButton } from '../../components/buttons/OutlineAuthButton';
import { PhoneNumberInput } from '../../components/inputs/PhoneNumberInput';
import { HeroMergeHeader } from '../../components/layout/HeroMergeHeader';
import { GradientScreenWrapper } from '../../components/layout/GradientScreenWrapper';
import type { RootStackParamList } from '../../navigation/types';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/authStore';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export function LoginScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const [phone, setPhone] = useState('');

  const handleLogin = async () => {
    // Dismiss keyboard
    Keyboard.dismiss();
    
    // Validate phone number
    if (!phone.trim() || phone.trim().length < 10) {
      Alert.alert('Invalid Phone', 'Please enter a valid phone number');
      return;
    }

    try {
      console.log('🔐 Attempting login with phone:', phone.trim());
      
      // Login with phone number (backend will auto-register if new user)
      await login(phone.trim());
      
      console.log('✅ Login successful!');
      // Navigation will be handled automatically by RootNavigator
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      Alert.alert(
        'Login Failed',
        error.message || 'Unable to login. Please try again.'
      );
    }
  };

  const goHome = () => {
    // For guest mode - you can implement guest login later
    navigation.replace('Home');
  };

  return (
    <GradientScreenWrapper gradient="loginBackground">
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={styles.flex}
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false}>
              <View style={styles.page}>
                <HeroMergeHeader>
                  <LoginHeroCards />
                </HeroMergeHeader>

                <View style={styles.bodySheet}>
                  <View style={styles.brandCopy}>
                    <Text style={styles.headline}>We Deliver Care</Text>
                    <Text style={styles.subtitle}>Log in or sign up</Text>
                  </View>

                  <View style={styles.form}>
                    <PhoneNumberInput value={phone} onChangeText={setPhone} />
                    <CtaButton
                      title={isLoading ? 'Logging in...' : 'Log in'}
                      onPress={handleLogin}
                      disabled={phone.trim().length < 10 || isLoading}
                    />
                    {isLoading && (
                      <View style={styles.loadingContainer}>
                        <ActivityIndicator size="small" color={colors.brand.violet} />
                        <Text style={styles.loadingText}>Authenticating...</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.orRow}>
                    <View style={styles.orLine} />
                    <Text style={styles.orLabel}>OR</Text>
                    <View style={styles.orLine} />
                  </View>

                  <View style={styles.altActions}>
                    <OutlineAuthButton
                      title="Continue with google"
                      leadingIcon="logo-google"
                      onPress={goHome}
                    />
                    <OutlineAuthButton
                      title="Continue as guest"
                      leadingIcon="person-circle-outline"
                      onPress={goHome}
                    />
                  </View>

                  <Text style={styles.legal}>
                    By Log in, you are agreeing to our{' '}
                    <Text style={styles.legalLink}>Privacy Policy</Text> and{' '}
                    <Text style={styles.legalLink}>Terms & Conditions</Text>.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientScreenWrapper>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safe: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
  },
  page: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bodySheet: {
    flexShrink: 0,
    width: '100%',
    backgroundColor: colors.surface.white,
    paddingHorizontal: spacing.screenHorizontal,
    paddingTop: spacing.xxs,
    paddingBottom: spacing.xs,
    gap: spacing.loginBlockGap,
    zIndex: 1000,
  },
  brandCopy: {
    alignItems: 'center',
    gap: spacing.xxs,
    paddingTop: spacing.xs,
  },
  headline: {
    ...typography.loginHeadline,
    fontSize: 24,
    lineHeight: 30,
  },
  subtitle: typography.loginSubtitle,
  form: {
    gap: spacing.loginFormGap,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  orLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
  },
  orLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.muted,
    letterSpacing: 1,
  },
  altActions: {
    gap: spacing.sm,
  },
  legal: {
    ...typography.loginLegal,
    paddingHorizontal: spacing.xs,
  },
  legalLink: typography.loginLegalLink,
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.xs,
  },
  loadingText: {
    fontSize: 14,
    color: colors.text.muted,
  },
});
