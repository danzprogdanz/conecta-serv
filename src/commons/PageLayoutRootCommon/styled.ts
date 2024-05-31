import styled from 'styled-components';

export const PageLayoutRootStyled = styled.div`
  display: flex;
  align-items: center !important;
  flex-direction: column;
  height: calc(100vh - 70px);
  justify-content: center !important;
  align-items: center;
  margin-top: 60px;
  text-align: center;
  position: fixed;
  width: 100vw;

  @media (max-width: 1150px) {
    height: fit-content;
    width: 99.9%;
    margin-left: auto;
    margin-right: auto;
    position: absolute; 
    align-self: center;
  }

  @media (max-width: 520px) {
    width: 99.2%;
  }
`;

