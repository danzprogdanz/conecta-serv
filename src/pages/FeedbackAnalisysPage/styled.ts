import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';

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

export const HomePageLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


`
export const TopContainerSupportStyled = styled.div`
    height: 35px;
    width: 95vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

export const FilterContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95vw;
  height: 3.2rem;
  margin-top: 0.8rem;
  /* background-color: rgba(198, 221, 246, 0.3); */
  gap: 1rem;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: fit-content;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`
export const FilterButtonsContainerStyled = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  margin-left: 1rem;

  @media (max-width: 1150px) {
    margin-left: auto;  
    margin-right: auto;  
    height: 25%;

  }

  @media (max-width: 920px) {
    margin-left: auto;  
    margin-right: auto;  
    height: 25%;
  } 
`

export const MainContentContainerStyled = styled.div`
  /* background-color: rgba(198, 221, 246, 0.2); */
  width: 95vw;
  height: 74vh;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 1150px) {
    flex-direction: column;
    height: fit-content;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`

export const MapWrapperStyled = styled.div<{
  $fullScreenMap?: boolean;
}>`
  height: 100%;
  width: 40%;
  position: relative;
  display: flex;
  transition: all 1.2s ease;

  ${(props) => {
    switch (props.$fullScreenMap) {
      case true:
        return css`
          height: calc(100% - 5px);
          width: calc(100% - 10px);
          position: absolute;
          display: flex;
          top: 5px;
          left: 5px;
          z-index: 999;
        `;
      default:
        return css`      
        @media (max-width: 1150px) {
          width: 85%;
          height: 500px;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
        }
        `;
    }
  }}

  
`

export const LeftContainerSupportStyled = styled.div`
  width: 60%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1150px) {
    width: 85%;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
}
`

export const TableContainerStyled = styled.table<{
  $variant?: 'grid' | 'details';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "grid":
        return css`
          display: none;
        `;
      case "details":
        return css`
            border-collapse: collapse;
            height:fit-content;
            width: 99%;
              
        `;
      default:
            break;
    }
  }}
`;

export const ColumsContainerRootStyled = styled.tr`
  height: 2rem;
  width: 100%;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.DarkTheme600};
  color: ${colors.DarkTheme200};
  border: 2px solid ${colors.DarkTheme600};
  font-size: 0.8rem;
`;

export const THeadStyled = styled.thead`
  position: sticky;
  z-index: 1;
  top: 0;
`

export const ColumnHeadRowStyled = styled(ColumsContainerRootStyled)<{
  $variant?: 'details' | 'grid';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "details":
        return css`
            ${ColumsContainerRootStyled} {};
        `;
      case "grid":
        return css`
          display: none;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

export const ColumnNameElementStyled = styled.th<ColumnNameElementProps>`
  height: fit-content;
  width: fit-content;
  margin: 0.2rem;
  padding: 0.2rem;

  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`

export const TableWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.DarkTheme800};
  margin-bottom: 1rem;

  overflow-x: auto;

              &::-webkit-scrollbar {
                width: 16px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: ${colors.Principal200};
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }

    @media (max-width: 1150px) {
      width: 100%;
      height: 85vh;
      margin-left: auto;
      margin-right: auto;
    }
`

export const TableCellStyled = styled.td`
  align-items: center;
  display: flex;
  flex-direction: row-reverse !important;
  width: 100%;
  height: 100%;
`;


export const TableCellPropsStyled = styled(TableCellStyled)<{
  $variant?: 'grid' | 'details';
  $flex?: string
}>`
  ${(props) => {
    switch (props.$variant) {
      case "details":
        return css`
          width: 100%;
          height: 2.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center ;
          align-items: center !important;
          color: white;
          font-size: 0.8rem;
          flex: 1;
          border-right: 2px solid ${colors.DarkTheme600};
          border-left: 2px solid ${colors.DarkTheme600};
          gap: 0.5rem;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
  
  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`;

export const TableRowStyled = styled.tr<{
  $variant?: 'grid' | 'details';
}>`
  ${(props) => {
    switch (props.$variant) {
      case "grid":
        return css`
          display: none;
        `;
      case "details":
        return css`
          width: 100%;
          min-width: 700px;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: ${colors.DarkTheme900};
          border: 2px solid ${colors.DarkTheme600};
          align-items: center;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  height: auto;
`;