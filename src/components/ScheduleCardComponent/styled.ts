import styled, { css } from 'styled-components'
import { colors } from '../../assets/styles/colors'


export const UserCardStyled = styled.div`
  height: 100vh;
  position: fixed;
  width: 38vw;
  background-color: #576B65;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 64px;
`

export const TopWrapperStyled = styled.div`
  width: 98%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const CloseButtonStyled = styled.button`
  height: 36px;
  appearance: none;
  width:  38px;
  border-color: #28344F;  
  color: #F9F9FA;
  background-color: #576B65;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border: 3px solid #F9F9FA;
  cursor: pointer;

  &:hover {
    background-color: ${colors.DarkTheme400};
  }

  &:active {
    border: 3px solid #3BEAB3;
    background-color: ${colors.DarkTheme400};
    color: #3BEAB3;
  }
`

export const CardTitleStyled = styled.h1`
  margin: 0;
  color: ${colors.Cinza500};
` 

export const CardSubtitleStyled = styled.h3`
  margin: 0;
  color: ${colors.Cinza700};
` 

export const SeparateLineStyled = styled.div`
  height: 3px;
  width: 80%;
  background-color: ${colors.Cinza100};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.3;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`

export const TagsWrapperStyled = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  gap: 0.4rem;
`

export const TagWrapperStyled = styled.p`
  border: 3px solid ${colors.Cinza100};
  color: ${colors.Cinza100};
  padding: 0.2rem 1rem;
  margin: 0;
`

export const SectionsButtonsWrapperStyled = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`

export const SectionContentContainerStyled = styled.div`
  height: 46%;
  width: 74%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  padding-right: 12px;

  &::-webkit-scrollbar {
    width: 16px; /* Increase the width of the scrollbar to accommodate the "margin" */
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

export const ScheduleCardRootStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ScheduleContentWrapperStyled = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const SchedulesPickerBoardStyled = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  //border: 3px solid red;
`

export const SchedulesElementsWrapperStyled = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 16px; /* Increase the width of the scrollbar to accommodate the "margin" */
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