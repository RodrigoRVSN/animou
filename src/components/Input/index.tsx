import { useCallback, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { TextInputProps } from 'react-native';

import * as S from './styles';

export interface IInput extends TextInputProps {
  error?: string;
  label: string;
  isPassword?: boolean;
}

export const Input = ({ label, isPassword, ...rest }: IInput) => {
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
    </>
  );
};
