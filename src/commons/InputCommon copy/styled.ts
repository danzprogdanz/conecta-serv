import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import InputErrorIcon from '../../assets/icons/AlertRedIcon.svg';

// Container for Input and Label
export const InputContainerStyled = styled.div<{
  $width?: string;
}>`

  width: ${props => (props.$width ? `${props.$width}` : '100%')};
`;

// Label for Input
export const InputLabelStyled = styled.label`
  font-size: 0.7rem;
  color: ${colors.White};
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.25rem; 
  color: black;
  font-weight: 700;
`;

// Input Field
export const InputFieldStyled = styled.input<{
  $state?: 'error' 
  $width?: string
}>`
  height: 30px;
  appearance: none;
  width: ${props => props.$width ? (props.$width) : ('100%')};;
  border-color: ${colors.DarkTheme600};
  color: ${colors.DarkTheme500};
  background-color: ${colors.White};
  padding: 0rem 0.5rem 0rem 0.5rem; 
  border: 3px solid ${props => props.$state === 'error' ? colors.Perigo800 : colors.DarkTheme600};

  &:hover:not(:focus):not(:not(:placeholder-shown)) {
    border-color: ${colors.DarkTheme500};
    color: ${colors.DarkTheme500};
  }

  &:focus {
    outline: none;                                       
    color: ${colors.Black};
    border-color: #3BEAB3;
  }

  &:not(:placeholder-shown) {
    color: ${colors.Black};
  }
`;

// Toggle Button
export const ToggleButtonStyled = styled.button`
  position: absolute;
  top: 55%;
  right: 4px;
  margin: 0px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-self: center;

  &:focus {
    outline: none;
  }
`;

// Input Element Container
export const InputElementContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

export const InputErrorAlertContainerStyled = styled.div`
  height: 1rem; 
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  right: -10px;
`

export const InputErrorIconStyled = styled.img`
  content: url(${InputErrorIcon});
  align-self: center;
`

export const InputErrorAlertWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: flex-end;
`
export const InputErrorAlertMsgStyled = styled.p`
  color: ${colors.Perigo800};
  font-size: 0.7rem;
  position: relative;
  bottom: 0;
  font-weight: 700;
`