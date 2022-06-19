import { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

export interface IButtonProps extends RectButtonProps {
  label: string | ReactNode;
  onPress: () => void;
  variant?: 'outlined';
}

export const Button = ({ label, onPress, variant }: IButtonProps) => {
  return (
    <S.ButtonStyled onPress={onPress} variant={variant}>
      <S.Label>{label}</S.Label>
    </S.ButtonStyled>
  );
};
