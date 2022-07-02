import { ThemeColors } from '@assets/styles/styled';
import type { ReactNode } from 'react';
import type { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

export interface IButtonProps extends RectButtonProps {
  label: string | ReactNode;
  onPress: () => void;
  color?: keyof ThemeColors;
}

export const Button = ({ label, onPress, color, ...rest }: IButtonProps) => {
  return (
    <S.ButtonStyled
      {...rest}
      onPress={onPress}
      color={rest.enabled !== undefined && !rest.enabled ? 'gray100' : color}
    >
      <S.Label>{label}</S.Label>
    </S.ButtonStyled>
  );
};
