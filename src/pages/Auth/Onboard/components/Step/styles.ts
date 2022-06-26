import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-family: ${({ theme }) => theme.font.heading};
  line-height: 38px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.text};
  line-height: 24px;
  text-align: center;
  margin-top: 16px;
`;

export const Picture = styled.Image`
  height: 300px;
  margin-bottom: 48px;
  width: 300px;
`;
