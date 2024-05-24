import styled, { css } from 'styled-components';
import { colors } from '../../../../assets/styles/colors';
import { Link } from 'react-router-dom';

interface ColumnNameElementProps {
  $flex?: string;
}

export const TableRootContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.DarkTheme800};
  /* margin-bottom: 1rem; */
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

          //padding: 1px;
        

          //text-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;


              &::-webkit-scrollbar {
                height: 6px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: ${colors.Principal200};
                cursor: pointer;
                scrollbar-start: start;
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }
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

export const TableCellActionsPropsStyled = styled(TableCellStyled)<{
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
          justify-content: space-evenly ;
          align-items: center !important;
          color: white;
          font-size: 0.8rem;
          flex: 1;
          border-right: 2px solid ${colors.DarkTheme600};
          border-left: 2px solid ${colors.DarkTheme600};
          gap: 0.5rem;

          /* text-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden; */


              &::-webkit-scrollbar {
                height: 6px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: ${colors.Principal200};
                cursor: pointer;
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }
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

          &:hover {
            background-color: ${colors.DarkTheme500};
            cursor: pointer;
          }
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

export const NoOptionAvailableWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 25%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  color: ${colors.Cinza900};
`