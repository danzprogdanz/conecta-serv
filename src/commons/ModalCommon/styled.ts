import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ModalBackgroundStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(000, 00, 00, 0.7);
  position: fixed;
  top: 50%; /* Vertically center the modal */
  left: 50%; /* Horizontally center the modal */
  transform: translate(-50%, -50%); /* Center both horizontally and vertically */
  z-index: 99999; /* Adjust the z-index value as needed */
`
export const ModalRootContainerBasedStyled = styled.div`
  background-color: #a3a3a0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  color: white;
  padding: 2rem 2rem 2rem 2rem;
  //height: fit-content !important;
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  gap: 3rem;
  border-radius: 16px;

  ${(props) => props.theme?.colors && (`background-color:  ${props.theme?.colors?.cinza100};`)};
  ${(props) => props.theme?.colors && (`color:  ${props.theme?.colors?.Black};`)};

`

export const ModalRootContainerStyled = styled(ModalRootContainerBasedStyled)<{
  $variant?: 'small' | 'medium' | 'large' | 'extra-large' | 'square-medium' | 'signup-modal';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "small":
        return css`
          height: 20vh;
          width: 30vw;
      `
      case "medium":
        return css`
          height: 34vh;
          width: 40vw;
      `
      case "large":
        return css`
          height: 40vh;
          width: 60vw;
      `
      case "extra-large":
        return css`
          height: 60vh;
          width: 80vw;
      ` 
      case "square-medium":
        return css`
          height: 25rem;
          width: 40rem;
      ` 
      default:
        return css`
          height: 30vh;
          width: 40vw;
      `

    }
  }}
`;