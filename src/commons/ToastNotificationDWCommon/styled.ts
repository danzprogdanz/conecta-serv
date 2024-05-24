import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ToastContainerBaseStyled = styled.div`
padding: 16px 16px;
height: fit-content;
width: 415px;
z-index: 99999;
display: flex;
justify-content: flex-start; 
align-items: center; 
position: fixed;
top: 70px; 
right: 0px;

  @media (max-width: 768px) {
    width: 80vw;
  }
` 

export const ToastTitleStyled = styled.h2`
`

export const ToastDescriptionStyled = styled.p`
`

export const ToastInfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
`

// Base Toast Icon
export const ToastIconBaseStyled = styled.img`
  width: 64px;
  margin-right: 1rem;
`;

// Toast Icon with variant-based content
export const ToastIconStyled = styled(ToastIconBaseStyled)<{
  $variant?: 'success' | 'error' | 'attention';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "success":
        return css`
        `;
      case "error":
        return css`
        `;
      case "attention":
        return css`
        `;
      default:
        break;
    }
  }}
`;

// Root Toast Container with variant-based styles
export const ToastContainerRootStyled = styled(ToastContainerBaseStyled)<{
  $variant?: 'success' | 'error' | 'attention';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "success":
        return css`
          background-color: ${colors.Sucesso200};
          color: ${colors.Sucesso700};
        `;
      case "error":
        return css`
          background-color: ${colors.Perigo200};
          color: ${colors.Perigo700};
        `;
      case "attention":
        return css`
          background-color: ${colors.Atencao200};
          color: ${colors.Atencao700};
        `;
      default:
        break;
       }
     }}
   `;