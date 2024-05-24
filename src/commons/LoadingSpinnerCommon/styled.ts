import styled from 'styled-components';

export const LoadingSpinnerBackgroundStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(000, 00, 00, 0.7);
  position: fixed;
  top: 50%; /* Vertically center the modal */
  left: 50%; /* Horizontally center the modal */
  transform: translate(-50%, -50%); /* Center both horizontally and vertically */
  z-index: 99999; 
`
export const LoadingStyled = styled.div`
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SvgStyled = styled.svg`
  /* just to improve understando , components structure and rendering SVG content */
`;

export const RectStyled = styled.rect`
         ${(props) => props.theme?.colors && (`fill: ${props.theme?.colors?.carrotOrange};`)}
  /* just to improve understando , components structure and rendering Rect content */
`;