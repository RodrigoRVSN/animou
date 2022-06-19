import styled from 'styled-components/native';

interface IBullet {
  index: number;
  id: number;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black100};
  flex: 1;
`;

export const BulletContainer = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Bullet = styled.View<IBullet>`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: ${({ index, id, theme }) =>
    index === id - 1 ? theme.colors.red_brand : theme.colors.gray100};
  margin: 0 8px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  padding: 0 20px;
`;
