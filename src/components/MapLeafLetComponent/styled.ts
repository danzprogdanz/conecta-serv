import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Popup } from 'react-leaflet';

export const DarkModeButtonWrapperStyled = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
  z-index: 999;
  top: 100px;
  left: 17px; 
`;

export const FullScreenButtonWrapperStyled = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
  z-index: 999;
  top: 110px;
  left: 17px; 
`;

export const MapContainerStyled = styled.div`
  height: 20rem;
  width: 20rem;
  border: solid 2px red;
`

export const PopupContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.DarkTheme900};
  //padding: 0.5rem;
  border: 0rem;
  margin: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`

export const StyledPop = styled(Popup)`
  background-color: none;
  margin: 0px;
  height: 100%;
  width: fit-content;

  .leaflet-container a.leaflet-popup-close-button {
    background-color: red;
    position: relative;
    top: -130px !important;
    right: 30px;
    color: red !important;

    /* &:hover {
      color: ${colors.Perigo900}
    } */
  }


  .leaflet-popup-content-wrapper {
    border-radius: 0;
    padding: 0px;
    margin: 0px;
    background-color: transparent;
    position: relative;
    bottom: 50px;
    left: 0px;

    // Add more specificity to override Leaflet's default styles
    .leaflet-popup-content {
      border: none;
      padding: 0;
      margin: 0;
      color: inherit;
    }
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

const TextPopupBaseStyled = styled.div`
   padding: 0.2rem;
  margin: 0 !important;
  text-wrap: nowrap;
`

export const KeyTextPopup = styled(TextPopupBaseStyled)<{
  $darkMode?: boolean;
}>`
  //background-color: ${colors.Atencao400};
  //border: solid 0.2px ${colors.Principal100};
  color: ${colors.Cinza500};

  ${(props) => {
    switch (props.$darkMode) {
      case true:
        return css`
          border: solid 0.2px ${colors.Principal100};
          color: ${colors.DarkTheme900};
        `;
      default:
        return css``;
    }
  }} 
`
export const ValueTextPopup = styled(TextPopupBaseStyled)<{
  $darkMode?: boolean;
}>`
  //background-color: ${colors.Atencao400};
  color: ${colors.White} !important;
  border: solid 0.2px ${colors.DarkTheme900};
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) => {
    switch (props.$darkMode) {
      case true:
        return css`
          border: solid 0.2px ${colors.Principal100};

          /* color: ${colors.White};
          display: flex;
          flex-direction: row;
          align-items: center;
          border: solid 2px ${colors.DarkTheme900}; */

        `;
      default:
        return css``;
    }
  }} 
`

export const KeyWrapperStyled = styled.div<{
  $darkMode?: boolean;
}>`
  background-color: ${colors.DarkTheme900};
  border: solid 2px ${colors.DarkTheme900};

  ${(props) => {
    switch (props.$darkMode) {
      case true:
        return css`
          
          background-color: ${colors.Principal100};
          border: solid 2px ${colors.Principal100};
        `;
      default:
        return css``;
    }
  }} 
`
export const ValuesWrapperStyled = styled.div<{
  $darkMode?: boolean;
}>`
  background-color: ${colors.Principal500};
  border: solid 2px ${colors.DarkTheme900};

  ${(props) => {
    switch (props.$darkMode) {
      case true:
        return css`
          
          background-color: ${colors.Principal500};
          border: solid 2px ${colors.Principal100};
        `;
      default:
        return css``;
    }
  }} 
`




export const RemoveOptionButtonStyled = styled.button`
  height: 15px;
  width: 15px;
  border: 2px solid ${colors.Perigo600};
  background-color: ${colors.Perigo600};
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.Perigo300};
  }

  &:active {
    
    border: 2px solid ${colors.Perigo100};
  }
`
export const RemoveOptionIconStyled = styled.img`
  height: 10px;
  width: 10px;
`

export const ClosePopUpWrapperStyled = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: -10px;
  right: -10px;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px; // Adjust as needed
`;

export const GreenCircleStyled = styled(Circle)`
  background-color: green;
`;

export const RedCircleStyled = styled(Circle)`
  background-color: red;
`;