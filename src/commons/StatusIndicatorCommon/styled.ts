import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";

export const StatusIndicatorRootStyled = styled.div<{$visibility?: boolean}>`
  height: fit-content;
  width: 3rem;
  padding: 0.2rem 0.6rem;
  color: ${colors.Cinza100};
  

  ${(props) => {
    switch (props.$visibility) {
      case true:
        return css`
          visibility: visible;
          opacity: 1;
          transition: visibility 0.3s ease, opacity 0.3s ease, color 0.3s ease; 
        `;
      case false:
        return css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s ease, opacity 0.3s ease, color 0.3s ease; 
        `;
      default:
        return css``; // Default styling if $visibility is neither true nor false
    }
  }}
`;

export const ActiveStatusStyled = styled(StatusIndicatorRootStyled)`
    background-color: ${colors.Sucesso400};
`

export const InactiveStatusStyled = styled(StatusIndicatorRootStyled)`
    background-color: ${colors.Perigo400};
`