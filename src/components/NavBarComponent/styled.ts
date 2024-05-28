import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';

export const ContainerNavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212A42;
    box-shadow: 0px 8px 10px 0px rgba(17, 17, 17, 0.20);
    height: 40px;
    padding: 8px;
    padding-left: 10rem;
    padding-right: 2.5vw;

    @media (max-width: 768px) {
      padding-left: 0rem;
    }
`;

export const WhiteLogo = styled.img`
    height: 50px;
    width: 80px;
    left: 1.6vw;
    background-color: transparent;
    position: absolute;
    flex-direction: flex-start;
    align-items: center;
`;

export const NavBarTitle = styled.h1`
    color: #F9F9FA;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 499px) {
    font-size: 20px;
  }
`

export const LogoLinkStyled = styled(Link)`
    display: flex;
    align-items: center; 
    margin-left: 2rem; 
    margin-right: 6rem; 
    text-decoration: none;
    
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: auto;
      margin-left: 0rem; 
    }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const List = styled.ul`
  margin-right: 2.5rem;
  display: flex;
  list-style: none;
  gap: 3em;
  align-items: center;
  justify-content: flex;

  @media (max-width: 768px) {
      display: none;
    }
  `

export const ListItem = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #F9F9FA;
    height: auto;
    transition: color 0.3s ease;
    outline: none;
`;

export const ActiveDiv = styled.hr`
    height: 4px;
    width: auto;
    background-color: #90BAEE;
    border: none;
    transition: width 0.3s ease;
    margin-top: 4px; 
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  height: auto;
`;

export const CustomLinkLogo = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  height: fit-content;
  position: absolute;
  top: 3px;
  left: 0;
`;

export const MobileNavBar = styled.button`
  display: none;
  background-color: transparent;
  height: 60px;
  width: 60px;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
  }
`

export const OpenMobileMenuSVG = styled.img`
  height: 40px;
  width: 40px; 
  margin-right: 2rem;
  transition: transform 1s ease-in-out;
`

export const CloseMobileMenuSVG = styled.img`
  height: 40px;
  width: 40px; 
  margin-right: 2rem;
  z-index: 99999;
  transition: transform 1s ease-in-out;
`

export const MobileMenu = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(94, 118, 157, 0.9);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: transform 1s ease-in-out; /* Add transition */

  @media (min-width: 768px) {
    display: none;
  }
`

export const ListItemMobile = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #F9F9FA;
    height: auto;
    transition: color 0.3s ease;
    outline: none;
    font-size: 2rem;
`;

export const MenuMobileWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;
`

export const ButtonWrapperStyled = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
      display: none;
    }
`

export const ButtonWrapperMobileStyled = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: 30px;
    left: auto;
    align-self: center;
`