import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';
import { colors2 } from '../../assets/styles/colors2';

interface ColumnNameElementProps {
  $flex?: string;
}

export const PageLayoutLoadingRootStyled = styled.div`
  width: 95%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  text-align: center; 
  align-items: center;
  padding-top: 2rem;
`

export const FeedbackPageLayoutStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const ContainerSupportStyled = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SeparatedLineDiv = styled.div`
  width: 3px;
  height: 90%;
  margin-top: auto;
  margin-bottom: auto;
  background: ${colors2.DarkTheme700}
`