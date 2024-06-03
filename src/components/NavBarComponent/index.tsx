import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  ContainerNavBar,
  WhiteLogo,
  List,
  ListItem,
  ActiveDiv,
  CustomLink,
  MobileNavBar,
  OpenMobileMenuSVG,
  MobileMenu,
  CloseMobileMenuSVG,
  ListItemMobile,
  MenuMobileWrapper,
  ButtonWrapperStyled,
  ButtonWrapperMobileStyled,
  CustomLinkLogo,
} from './styled';
import ButtonCommon from '../../commons/ButtonCommon';
import { useUserAuth } from '../../contexts/Auth/UserAuthContext';
import { usersGetByDeviceIdAccess } from '../../services/dataAccess/userAcess';

interface IProps {
  children?: React.ReactNode;
  handleSignOut: () => void;
}

const NavBarComponent: React.FC<IProps> = ({ children, handleSignOut }) => {
  const [activeOption, setActiveOption] = useState<number | null>(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserDate] = useState<any>(null)
  const location = useLocation();
  const { id } = useParams();

  const { user } = useUserAuth();

  useEffect(() => {
    if(user && user.uid) {
      usersGetByDeviceIdAccess(user?.uid).then(result => setUserDate(result))
    }
  }, [])

  console.log("userData - nav", userData)

  useEffect(() => {
    if (location.pathname.includes('/home')) {
      setActiveOption(0);
      return;
    } 
    if (location.pathname.includes('/dispositivos')) {
      setActiveOption(1);
      return;
    } 
  }, [location, id]);

  const handleActive = (index: number) => {
    setActiveOption(activeOption === index ? null : index);
    setIsMenuOpen(false); // Close the menu when an option is selected
  };

  const handleOpenMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ContainerNavBar>
      <CustomLinkLogo to='/home'>
      </CustomLinkLogo>
      <List>
        <CustomLink to='/home'>
          <ListItem onClick={() => handleActive(0)}>
            Home{activeOption === 0 && <ActiveDiv />}
          </ListItem>
        </CustomLink>
        <CustomLink to='/agendamentos'>
          <ListItem onClick={() => handleActive(1)}>
            Agendamentos{activeOption === 1 && <ActiveDiv />}
          </ListItem>
        </CustomLink>
        <CustomLink to='/configuracoes'>
          <ListItem onClick={() => handleActive(2)}>
            Configurações{activeOption === 2 && <ActiveDiv />}
          </ListItem>
        </CustomLink>
        {/* <CustomLink to='/feedback'>
          <ListItem onClick={() => handleActive(3)}>
            Análise do feedback{activeOption === 3 && <ActiveDiv />}
          </ListItem>
        </CustomLink> */}
      </List>
      <ButtonWrapperStyled>
        <h3>{`${userData?.name} ${userData?.lastName}`}</h3>
        <ButtonCommon onClick={handleSignOut} variant='outline'>Sair</ButtonCommon>
      </ButtonWrapperStyled>
      <MobileNavBar onClick={handleOpenMobileMenu}>
        {!isMenuOpen ? <OpenMobileMenuSVG /> : <CloseMobileMenuSVG />}
      </MobileNavBar>
      {isMenuOpen && (
        <MobileMenu>
          <MenuMobileWrapper>
          <CustomLink to='/home'>
              <ListItemMobile onClick={() => handleActive(0)}>
                Home{activeOption === 0 && <ActiveDiv />}
              </ListItemMobile>
            </CustomLink>
            <ButtonWrapperMobileStyled>
              <ButtonCommon onClick={handleSignOut} variant='outline'>Sair</ButtonCommon>
            </ButtonWrapperMobileStyled>
          </MenuMobileWrapper>
        </MobileMenu>
      )}
    </ContainerNavBar>
  );
};

export default NavBarComponent;