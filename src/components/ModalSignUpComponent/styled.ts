import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const TitleAndDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const DescriptionTextStyled = styled.p`
    margin-top: 1rem;
    display: flex;
    text-align: left;
    justify-content: flex-start;
`

export const ButtonsContainerStyled = styled.div`
  bottom: 1rem;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`

export const ModalSignUpWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`

export const SeparateLineStyled = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.DarkTheme500};
  display: flex;
`

export const StepsButtonsContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`

export const SaveButtonStyled = styled.button<{ $active?: boolean }>`
  height: 25px;
  width: 25px;
  background-color: ${({ $active }) => ($active ? colors.Principal200 : colors.Cinza800)};
  color: ${({ $active }) => ($active ? colors.DarkTheme900 : colors.Cinza100)};
  font-weight: 900;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s; /* Add a smooth transition effect */
  user-select: none;

  /* &:hover {
    background-color: ${({ $active }) => ($active ? colors.Principal400 : colors.Principal300)};
  }

  &:active {
    background-color: ${({ $active }) => ($active ? colors.Principal500 : colors.Principal400)};
    border: solid 3px ${({ $active }) => ($active ? colors.Principal300 : colors.Principal200)};
  } */
`;

export const ContentOneContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.2rem;
`

export const ContentThreeContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.6rem;
`

export const FirstLineInputsContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
`

export const ContentTwoContainerStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
`

export const ContentFiveContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 1rem;
`

export const StepWrapperStyled = styled.div<{
  $isVisible?: boolean;
  $isCurrent?: boolean;
}>`
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  position: ${(props) => (props.$isCurrent ? "static" : "absolute")};
  flex: ${(props) => (props.$isCurrent ? "1" : "0")};
  flex-direction: column;
  align-self: ${(props) => (props.$isCurrent ? "auto" : "flex-start")};
  display: ${(props) => (props.$isCurrent ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;