import React, { useEffect } from 'react';
import { UserTypeRootContainerStyled, ButtonRootStyled, UserTypeLabelStyled, UserTypeIconStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined | null;
  variant?: 'contractor' | 'service' | undefined;
  type?: string; 
  label?: string
}

const UserTypeButtonCommon: React.FC<IProps> = ({ children, onClick, variant, $isDisabled, $isActive, label }) => {

/*   const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (onClick) {
        onClick();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClick]); */

  return (
    <UserTypeRootContainerStyled>
      <UserTypeLabelStyled>{label}</UserTypeLabelStyled>
      <ButtonRootStyled onClick={onClick} disabled={$isDisabled} $isActive={$isActive}>
        <UserTypeIconStyled $variant={variant}/>
      </ButtonRootStyled>  
    </UserTypeRootContainerStyled>
    
  );
};

export default UserTypeButtonCommon;