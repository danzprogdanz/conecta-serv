import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ResetPasswordLink = styled.a`
  color: #28549D;
  z-index: 999; 
  margin-left: auto;
  margin-top: 0.225rem;
`

export const LoginPageLayoutStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0A56C5;
  display: flex;
  flex-direction: row;
`



export const LogoContainerStyled = styled.div`
  height: 12rem;
  width: 48rem;
  background-color: #D9D9D9;
  top: 15%;
  left: 5vw;
  position: fixed;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  user-select: none;
`

export const LogoTitleStyled = styled.h1`
  font-size: 4rem;
  color: #044397;
  margin: 0;
` 

export const LogoSubtitleStyled = styled.h3`
  font-size: 2rem;
  color: #576B65;
  margin: 0;
`

export const DescriptionStyled = styled.div`
  background-color: #3BEAB3;
  height: fit-content;
  padding: 0.4rem;
  width: 80%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  border-radius: 12px;
  font-weight: 700;
   letter-spacing: 5px;
`

export const LoginFormContainerStyled = styled.div`
  background-color: #6D99D5;
  display: flex;
  flex-direction: column; /* Stack elements in a column */
  position: fixed;
  top: 50%;
  right: 5vw;
  width: 400px;
  height: 70vh;
  transform: translateY(-50%);
  z-index: 999;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 100vw;
    background-color: rgba(22, 27, 44, 0.85);
  }
`;

export const TitleContainerStyled = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem; 
`;

export const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
`

export const LoginFormCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;/* ${colors.Cinza400} */
  justify-content: center;
  align-items: center;
`

export const SignUpOpenModalButtonStyled = styled.button`
  margin-top: 4rem;
  border: none;
  background-color: transparent;
  padding: 0.2rem;
  cursor: pointer;
  color: #101213;
    font-weight: 700;  
    font-size: 1.2rem;

  &:hover {
    color: black;
  }
`

export const InputsWrapperStyled = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`