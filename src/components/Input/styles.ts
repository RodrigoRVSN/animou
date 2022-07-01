import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Ionicons';

type InputProps = {
  isFocused: boolean;
};

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`;

export const InputContainer = styled.View<InputProps>`
  background-color: ${({ theme }) => theme.colors.black200};
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.orange_brand : theme.colors.black200};
  border-radius: 4px;
  border-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 14px 18px;
`;

export const InputStyled = styled(TextInput)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 90%;
`;

export const PasswordIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  margin-bottom: 8px;
`;
