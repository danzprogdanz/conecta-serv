import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';


export const TextBoxStyled = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  border: 3px solid ${colors.DarkTheme600};

  &:focus {
    outline: none;
  }
`

export const LabelStyled = styled.label`
  font-size: 0.7rem;
  color: ${colors.White};
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.25rem; 
  color: black;
  font-weight: 700;
`;

export const TextBoxRootWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`