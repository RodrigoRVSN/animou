import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { IButtonProps } from '.';

type IButtonStyled = Pick<IButtonProps, 'color'>;

export const ButtonStyled = styled(RectButton)<IButtonStyled>`
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black200};
  border-radius: 4px;
  height: 48px;
  justify-content: center;
  min-width: 48px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
