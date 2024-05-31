import styled, { css } from 'styled-components'
import { colors2 } from '../../../../assets/styles/colors2'
import { colors } from '../../../../assets/styles/colors'


export const SchedulesListRootStyled = styled.div`
  height: 80%;
  width: 20%;
  background-color: ${colors2.DarkTheme100};
  border-radius: 30px;
`

export const SeparateLineStyled = styled.div`
  height: 3px;
  width: 80%;
  background-color: ${colors.DarkTheme500};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.8rem;
`

export const SchedulesTitleStyled = styled.h3`
  color: white;
`

export const MainContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`

export const SchedulesListStyled = styled.div`
  height: 76%;
  width: 20%;
  background-color: ${colors2.DarkTheme500};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.1rem;
  padding-top: 2%;
  padding-bottom: 2%;
  overflow-y: auto;

  &::-webkit-scrollbar {
                height: 3px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: ${colors2.DarkTheme700};
                cursor: pointer;
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }
`

export const ScheduleDisplayStyled = styled.div`
  height: 76%;
  width: 70%;
  background-color: ${colors2.DarkTheme500};
  border-radius: 10px;
  padding-top: 2%;
  padding-bottom: 2%;
`

export const ScheduleElementButtonStyled = styled.button`
  height: 4rem;
  width: 90%;
  padding: 0.2rem;
  background-color: transparent;
  outline: none;
  border: 2px solid ${colors2.DarkTheme700};
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
f
  &:hover {
    background-color: #8da8a0;
  }

  &:active {
    background-color: #ffffe777;
  }
`

export const ScheduleElementTextStyled = styled.p`
  margin: 0;
`

export const ButtonWrapperStyled = styled.div`
  height: fit-content;
  width: fit-content;
  margin-left: auto;
  margin-right: 28%;
  position: relative;
  z-index: 99999;
`