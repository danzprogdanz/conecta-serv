import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const StatusIndicatorRootStyled = styled.div`
  height: fit-content;
  width: 3rem;
  padding: 0.2rem 0.6rem;
`

export const ActiveStatusStyled = styled(StatusIndicatorRootStyled)`
    background-color: ${colors.Sucesso400};
`

export const InactiveStatusStyled = styled(StatusIndicatorRootStyled)`
    background-color: ${colors.Perigo400};
`