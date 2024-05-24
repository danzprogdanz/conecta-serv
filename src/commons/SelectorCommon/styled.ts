import styled, { css } from "styled-components";
import DropdwonButtonIcon from '../../assets/icons/DropDownButtonIcon.svg';
import UpDropdwonButtonIcon from '../../assets/icons/UpDropDownArrow.svg';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import { colors } from "../../assets/styles/colors";
import CheckMarkIconSVG from '../../assets/icons/CheckBox.svg';
import RemoveOptionIconSVG from '../../assets/icons/RemoveIcon.svg';

interface StyleProps {
  $width?: string;
  $variant?: 'fit-width' | 'fullWidth' | 'mini';
  $selected?: boolean;
  $isVisibleDropDown?: boolean;
}

export const SelectOptionsElementStyled = styled.option`
  outline: none;
  background-color: transparent;
  padding: 0.2rem;
  z-index: 999;
  align-self: self-start;
  outline: none;
  cursor: pointer;
  //text-align: start;
`
export const SelectElementStyled = styled.select`
  margin-right: 1rem;
  width: 100%;
  height: 2.35rem;
  align-self: center;
  position: relative;
  display: inline-block;
  padding: 0.5em; 
  border: 3px solid #28344F;
  background-color: transparent; 
  color: #F9F9FA;

  &:focus {
    outline: none;
    border: 3px solid #28344F;
    background-color: transparent; 
    color: #F9F9FA;
  }
`

export const SelectInputLabelStyled = styled.label<StyleProps>`
  margin-bottom: 0rem;
  font-size: 10px;
  height: fit-content;
  width: fit-content;
  text-wrap: nowrap;
  margin-bottom: ${(props) => props.$variant === 'mini' ? ('0px') : '0.25rem'} ; 
`
export const SelectElementRootStyled = styled.div<StyleProps>`
  //height: 100%;
  display: flex;
  align-self: center;
  color: white;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width || '194px'};
  
  ${(props) => {
    switch (props.$variant) {
      case "fit-width":
        return css`
           width: 100%;
        `;
      case "fullWidth":
        return css`
           width: 100%;
        `;

      default:
        return css`
        `;
    }
  }}
`

export const SelectElementWrapperStyled = styled.div<StyleProps>`
  height: fit-content;
  width: 100%;
  border: 3px solid ${(props) => (props.$isVisibleDropDown ? `${colors.DarkTheme200}` : '#28344F')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
  padding-left: 6px;

  &:hover {
    border-color: ${(props) => (props.$isVisibleDropDown ? `${colors.DarkTheme200}` : `${colors.DarkTheme500}`)};;
  }

  ${(props) => {
    if (props.$selected && props.$isVisibleDropDown) {
        return css`
          width: calc(100% - 6px);
          border: 3px solid ${props.$isVisibleDropDown ? (`${colors.DarkTheme200}`) : ('#28344F')};
          background-color: #28344F;
          color: ${colors.Cinza100};
        `;
    } else if (props.$selected) {  
        return css`
          width: calc(100% - 6px);
          border: 3px solid #28344F;
          background-color: #28344F;
          color: ${colors.Cinza100};
        `;
    }
  }}

  ${(props) => {
    switch (props.$variant) {
      case "fullWidth":
        return css`
          width: 100%;
        `;
      default:
        return css`
        `;
    }
  }}
`;

export const UpDropDownIconStyled = styled.img`
  content: url(${UpDropdwonButtonIcon});
  height: 10px;
  width: 10px;
  align-self: center;
  justify-self: center;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;

`
export const DownDropDownIconStyled = styled.img`
  content: url(${DropdwonButtonIcon});
  height: 10px;
  width: 10px;
  align-self: center;
  justify-self: center;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;
`
export const DropDownButtonStyled = styled.div<{
  $variant?: 'fit-width' | 'fullWidth' | 'mini' ;
  $width?: string;
  $isVisibleDropDown?: boolean;
}>`
  width: ${(props) => (props.$width ? props.$width : '200px')}; 
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: #161B2C;
  border: none;
  position: relative;
  color: white;
  cursor: pointer;

  ${(props) => {
    switch (props.$variant) {
      case "fit-width":
        return css`
           width: 100% !important;
        `;
      case "fullWidth":
        return css`
           width: 100%;
        `;

      default:
        return css`
        `;
    }
  }}
`;

export const DropDownContainerBaseStyled = styled.div<{
  $variant?: 'fit-width' | 'fullWidth' | 'mini' ;
  $width?: string;
  $dropDownHeight?: string;
}>`
    width: ${(props) => (props.$width ? `calc(${props.$width} - 6px)` : '194px')};
    height: ${(props) => (props.$dropDownHeight ? props.$dropDownHeight : '20rem')};
    //max-height: 100%;
    border: 3px solid ${colors.DarkTheme200};
    z-index: 9999;
    background-color: #161B2C;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 53px;

    ${(props) => {
    switch (props.$variant) {
      case "fit-width":
        return css`
          width: 100% ;
          position: absolute;
          z-index: 9999;
        `;
      case "fullWidth":
        return css`
           width: calc(100% - 4rem - 6px);
        `;
      case "mini":
        return css`
           margin-top: 34px;
        `;

      default:
        return css`
        `;
    }
  }}
`

export const DropDownContainerStyled = styled(DropDownContainerBaseStyled)<{
  $dropDown?: 'closed' | 'open';
}>`
  

  ${(props) => {
    switch (props.$dropDown) {
      case "closed":
        return css`
          opacity: 0;
          visibility: hidden;
          //display: none;
          transition: opacity 0.1s ease;
        `;
      case "open":
        return css`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.2s ease; 
        `;
      default:
        break;
    }
  }}`;

export const SearchBarContainerStyled = styled.div`
  width: 85%;
  height: 1rem;
  border: solid 3px ${colors.Principal200};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  padding: 4px;
  margin-top: 0.4rem;
`

export const SearchBarInputSyled = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  color: white;
`

export const SearchBarIconStyled = styled.img`
  height: 20px;
  width: 20px;
  content: url(${SearchIcon});
  user-select: none;
`

export const CheckBoxContainerStyled = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
  margin-top: auto;
  margin-bottom: auto;
`

export const CheckmarkIconStyled = styled.img`
  content: url(${CheckMarkIconSVG});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  pointer-events: none;
  z-index: 1;
`;

export const OptionElementWrapperStyled = styled.button<{
  $statusTypeOption?: boolean;
}>`
  width: 90% !important; 
  display: flex;
  flex-direction: row;
  justify-content: center/* ${(props) => (props.$statusTypeOption ? 'center !important' : 'flex-start')} */;
  align-items: ${(props) => (props.$statusTypeOption ? 'center' : 'stretch')}; /* Center vertically when $statusTypeOption is true */
  text-align: ${(props) => (props.$statusTypeOption ? 'center' : 'start')};
  z-index: 999;
  font-size: 0.8rem;
  all: unset; /* Use 'unset' to remove all default styles */
  text-align: center;
  margin: 0.2rem;
  cursor: pointer;

  &:hover {
    width: 100%;
    background-color: #28549D;
  }
`;


export const OptionsContainerStyled = styled.div`
  width: 95%;
  height: 500px;
  overflow-y: auto;
  overflow-x: auto;
  user-select: none;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.Principal200};
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(210, 211, 212, 0.5);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background-color: #161B2C;
  z-index: 999;
`;

export const OptionsSelectedContainerStyled = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  user-select: none;
  
  &::-webkit-scrollbar {
    width: 100%;
    height: 4px; 
    z-index: 9999;
    position: relative;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.Principal200};
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(210, 211, 212, 0.5);
  }
`
export const OptionSelectedStyled = styled.div`
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  width: 200px;
  min-width: 200px;
  border: solid 2px ${colors.Principal200};
  padding-left: 1px;
  padding-right: 1px;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RemoveOptionButtonStyled = styled.button`
  height: 15px;
  width: 15px;
  border: 2px solid ${colors.Perigo600};
  background-color: transparent;
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
  content: url(${RemoveOptionIconSVG});
  height: 10px;
  width: 10px;
`
export const PlaceHolderStreetStyled = styled.p`
  color: ${colors.Cinza100};
  align-self: center;
  justify-self: center;
  font-size: 0.8rem;
  margin-left: 1rem;
  margin-right: 3rem;
  display: flex;
  white-space: nowrap;
`;
export const PlaceholderText = styled.p`
    color: ${colors.Cinza900};
    font-size: 0.8rem;
    margin-left: 0.5rem;
`
export const SelectedPlaceholderText = styled.div`
    color: ${colors.Cinza100};
    font-size: 0.8rem;
    margin-left: 0.2rem;
    text-wrap: nowrap;
    padding-bottom: 2px;
`