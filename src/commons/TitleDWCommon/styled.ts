import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const TitleRootBaseStyled = styled.h2`
  color: #2A2E2D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

export const TitleRootStyled = styled(TitleRootBaseStyled)<{
  $variant?: 'modal' | 'subtitle' | 'sectionTitle';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "modal":
        return css`
          align-self: flex-start; 
          color: #2A2E2D;

          ${(props) => props.theme?.colors && (`color:  ${props.theme?.colors?.Cinza1000};`)};

        `;
      case "subtitle":
        return css`
          align-self: center; 
          color: ${colors.Cinza100};
          font-weight: lighter;

          ${(props) => props.theme?.colors && (`color:  ${props.theme?.colors?.Black};`)};

        `;
      case "sectionTitle":
        return css`
          display: flex;
          justify-content: flex-start; /* Align text to the left */
          align-items: center; /* Align vertically */
          margin-bottom: 5px;
          color: ${colors.Cinza100};

        `;
      default:
        break;
    }
  }}
`;