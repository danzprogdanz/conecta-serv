import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ButtonsContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const ModalConfirmDeleteRootStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;
`

export const SubTitleModalStyled = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  align-self: flex-start;
`

export const RememberChoiceContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: start;
`

export const CheckBoxInputStyled = styled.input`
  position: relative;
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: ${colors.DarkTheme300};
  border: 1px solid ${colors.Principal400};
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxLabelStyled = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  align-self: flex-start;
  margin-left: 0.5rem;
`

export const CheckBoxContainerStyled = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
`

export const SeparateLineStyled = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.DarkTheme500};
  display: flex;
`

export const TitleWrapperStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`