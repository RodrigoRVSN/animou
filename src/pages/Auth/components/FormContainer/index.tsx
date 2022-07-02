import { ReactNode } from 'react';
import * as S from './styles';

interface IFormContainer {
  children: ReactNode;
  description: string;
  redirectText?: ReactNode;
}

export const FormContainer = ({
  children,
  description,
  redirectText
}: IFormContainer) => {
  return (
    <S.Container>
      <S.ImageBrand source={require('../../../../assets/img/logo-brand.png')} />

      <S.Description>{description}</S.Description>

      <S.ChildrenBase>{children}</S.ChildrenBase>

      <S.Redirect>{redirectText}</S.Redirect>
    </S.Container>
  );
};
