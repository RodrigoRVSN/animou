import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black100};
  flex: 1;
`;

export const ImageBrand = styled.Image`
  margin-bottom: 40px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 24px;
  text-align: center;
`;

export const ChildrenBase = styled.View`
  width: 90%;
`;

export const Redirect = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  margin-top: 48px;
`;
