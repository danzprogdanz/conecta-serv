import styled from 'styled-components';

// Wrapper for the table to enable scrolling with a set height and width
export const TableWrapperStyled = styled.div`
  height: 50%;  // Adjusts height to occupy 76% of the parent element
  width: 90%;   // Adjusts width to occupy 90% of the parent element
  overflow-y: auto;  // Enables vertical scrolling if content overflows

  &::-webkit-scrollbar {
                height: 6px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: white;
                cursor: pointer;
              }

              &::-webkit-scrollbar-track {
                background-color: rgba(210, 211, 212, 0.5);
              }
`;

// Styles for the table element
export const TableStyled = styled.table`
  width: 100%;  // Table takes the full width of its container
  border-collapse: collapse;  // Collapses borders into a single border

  // Styles for the table header
  thead {
    background-color: #f1f1f1;  // Light grey background for header

    th {
      padding: 8px;  // Padding inside header cells
      border: 1px solid #ddd;  // Light grey border around header cells
    }
  }
`;

// Additional styles specifically for the table header
export const THeadStyled = styled.thead`
  th {
    position: sticky;  // Makes the header sticky
    top: 0;  // Sticks to the top of the scrolling container
    background-color: #f1f1f1;  // Ensures background color stays the same when sticky
    z-index: 1;  // Ensures the header stays on top of the body rows
  } 
`;

// Styles for the table body
export const TBodyStyled = styled.tbody`
  td {
    padding: 8px;  // Padding inside body cells
    border: 1px solid #ddd;  // Light grey border around body cells
  }

  color: white;
`;
