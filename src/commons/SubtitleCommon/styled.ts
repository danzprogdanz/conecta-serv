import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const SubtitleRootBaseStyled = styled.p`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

export const SubtitleRootStyled = styled(SubtitleRootBaseStyled)<{
  $variant?: 'modal' | 'subtitle' | 'subtitle-s1';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "modal":
        return css`
          align-self: flex-start; 
          color: ${colors.DarkTheme200};
        `;
      case "subtitle":
        return css`
          align-self: center; 
          color: ${colors.Black};
          font-weight: 500;
          font-size: 0.9rem;
          align-self: flex-start;
        `;
      case "subtitle-s1":
        return css`
          align-self: center; 
          color: ${colors.Principal100};
          font-weight: 400;
          font-size: 1rem;
        `;
      default:
        break;
    }
  }}
`;