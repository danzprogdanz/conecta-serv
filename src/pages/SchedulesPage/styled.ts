import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';

export const SchedulesPageLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const CardTitleStyled = styled.h1`
  margin: 0;
  color: ${colors.Cinza500};
  white-space: nowrap;
  max-width: 90%;
  overflow-x: auto;
  margin-left: auto;
  margin-right: auto;

  &::-webkit-scrollbar {
    width: 8px; /* Increase the width of the scrollbar to accommodate the "margin" */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3BEAB3;
    border-radius: 10px;
    border: 4px solid transparent; /* Creates the effect of margin inside the scrollbar */
    background-clip: padding-box; /* Ensures the background color doesn't cover the border */
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(210, 211, 212, 0.5);
    border-radius: 10px;
  }
` 