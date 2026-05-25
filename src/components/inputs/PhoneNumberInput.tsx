import type { TextInputProps } from 'react-native';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  borderWidth,
  colors,
  radii,
  sizes,
  spacing,
  typography,
} from '../../theme';

type Props = Omit<TextInputProps, 'style' | 'keyboardType'> & {
  value: string;
  onChangeText: (text: string) => void;
  countryCode?: string;
  countryFlag?: string;
  onCountryPress?: () => void;
  placeholder?: string;
};

/**
 * Country code chip + mobile number field (login / OTP flows).
 */
export function PhoneNumberInput({
  value,
  onChangeText,
  countryCode = '+91',
  countryFlag = '🇮🇳',
  onCountryPress,
  placeholder = 'Mobile Number',
  ...rest
}: Props) {
  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Country code ${countryCode}`}
        onPress={onCountryPress}
        style={({ pressed }) => [styles.country, pressed && styles.pressed]}>
        <Text style={styles.flag}>{countryFlag}</Text>
        <Text style={styles.code}>{countryCode}</Text>
      </Pressable>

      <TextInput
        {...rest}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.secondary}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        autoComplete="tel"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: spacing.sm,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xxs,
    minWidth: sizes.countryCodeWidth,
    minHeight: sizes.inputMinHeight,
    paddingHorizontal: spacing.sm,
    borderRadius: radii.input,
    borderWidth: borderWidth.emphasize,
    borderColor: colors.login.inputBorder,
    backgroundColor: colors.surface.white,
  },
  pressed: {
    opacity: 0.88,
  },
  flag: {
    fontSize: 18,
  },
  code: {
    ...typography.countryCode,
  },
  input: {
    flex: 1,
    minHeight: sizes.inputMinHeight,
    paddingHorizontal: spacing.md,
    borderRadius: radii.input,
    borderWidth: borderWidth.emphasize,
    borderColor: colors.login.inputBorder,
    backgroundColor: colors.surface.white,
    ...typography.inputValue,
  },
});
