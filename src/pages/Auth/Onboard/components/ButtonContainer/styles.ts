import styled, { css } from 'styled-components/native';

type ContainerProp = {
  isLastStep: boolean;
};

export const ButtonContainer = styled.View<ContainerProp>`
  flex: 1;
  justify-content: space-evenly;
  margin-bottom: 40px;

  ${({ isLastStep }) =>
    isLastStep &&
    css`
      width: 80%;
    `};
`;
