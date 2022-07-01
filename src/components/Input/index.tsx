import { useCallback, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { TextInputProps } from 'react-native';

import * as S from './styles';

export interface IInput extends TextInputProps {
  label: string;
  isPassword?: boolean;
  error?: string;
}

export const Input = ({ label, isPassword, error, ...rest }: IInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(false);

  const toggleFocus = useCallback(() => {
    setIsFocused((prevState) => !prevState);
  }, []);

  const toggleSecureEntry = useCallback(() => {
    setIsSecureEntry((prevState) => !prevState);
  }, []);

  return (
    <>
      <S.Label>{label}</S.Label>
      <S.InputContainer isFocused={isFocused}>
        <S.InputStyled
          autoCapitalize="none"
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          secureTextEntry={isSecureEntry}
          {...rest}
        />

        {isPassword && (
          <BorderlessButton onPress={toggleSecureEntry}>
            <S.PasswordIcon name={isSecureEntry ? 'eye-off' : 'eye'} />
          </BorderlessButton>
        )}
      </S.InputContainer>

      <S.ErrorMessage>{error}</S.ErrorMessage>
    </>
  );
};
