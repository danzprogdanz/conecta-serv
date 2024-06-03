import styled, { css } from 'styled-components'
import { colors } from '../../assets/styles/colors'
import RemoveOptionIconSVG from '../../assets/icons/RemoveIcon.svg';

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

export const SelectedAnalyticsContainerStyled = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row; 
  gap: 0.5rem;
  flex-wrap: wrap;

  overflow-y: auto;

                &::-webkit-scrollbar {
                width: 16px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: #28344F;
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }
`
export const SelectedAnalyticsTagStyled = styled.div`
  height: fit-content;
  width: fit-content;
  background-color: ${colors.DarkTheme400};
  border: solid 2px ${colors.DarkTheme600};
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SelectedAnalyticsColorStyled = styled.div<{
  $tagType?: 'vehicles' | string;
}>`
  width: fit-content;
  height: fit-content;
  background-color: #0C2454;
  padding: 2px 18px;
  color: white;
  font-size: 0.8rem;

  ${(props) => {
    switch (props.$tagType) {
      case "devices":
        return css`
          width: fit-content;
          height: fit-content;
          background-color: #59C4DE;
          padding: 2px 18px;
          color: ${colors.DarkTheme900};
        `;
      case "vehicles":
        return css`
          width: fit-content;
          height: fit-content;
          background-color: #88D969;
          padding: 2px 18px;
          color: ${colors.DarkTheme900};
        `;
      case "trash":
        return css`
          width: fit-content;
          height: fit-content;
          background-color: #EDD961;
          padding: 2px 18px;
          color: ${colors.DarkTheme900};
        `;
      case "plate":
        return css`
          width: fit-content;
          height: fit-content;
          background-color: #DF696D;
          padding: 2px 18px;
          color: ${colors.DarkTheme900};
        `;
      default:
        break;
    }
  }}
`
export const RemoveOptionIconStyled = styled.img`
  content: url(${RemoveOptionIconSVG});
  height: 10px;
  width: 10px;
`

export const InputTagsWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
export const InputWrapperStyled = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
`

export const AddTagButtonStyled = styled.button`
  height: 36px;
  appearance: none;
  width:  38px;
  border-color: #28344F;
  color: #F9F9FA;
  background-color: #28344F;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border: 3px solid #28344F;
  cursor: pointer;

  &:hover {
    background-color: ${colors.DarkTheme400};
  }

  &:active {
    border: 3px solid #3BEAB3;
    background-color: ${colors.DarkTheme400};
    color: #3BEAB3;
  }
`

export const InputPDFUploadStyled = styled.input`
  display: none; // Hide the default file input
`;

export const CustomButtonStyled = styled.label`
  background-color: #3BEAB3;
  border: none;
  color: #101213;
  height: 2.25rem;
  letter-spacing: 0.1em;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  width: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 3px #3BEAB3;
  text-wrap: nowrap;
  user-select: none;
  font-weight: 700;

  &:hover{
    background-color: ${colors.Principal300};
    ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.Yellow};`)};
  }

  &:active{
    background-color: ${colors.Principal400};
    border: solid 3px ${colors.Principal200};

    ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.carrotOrange};`)};
    ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Wine};`)};

  } 
`;

