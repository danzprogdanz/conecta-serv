import React, { useEffect } from 'react';
import { ButtonIconVariant, ButtonRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined;
  variant?: 'outline' | 'disabled' | 'default' | 'defaultSmall' | 'warningSmall' | 'warning' | undefined;
  icon?: 'exportBlue' | 'exportWhite' | undefined;
  type?: string; 
}

const ButtonCommon: React.FC<IProps> = ({ children, onClick, variant, icon, $isDisabled = undefined, $isActive }) => {

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
    <ButtonRootStyled onClick={onClick} $variant={variant} disabled={$isDisabled} $isActive={$isActive}>
      {variant && <ButtonIconVariant $icon={icon} />}
      {children}
    </ButtonRootStyled>
  );
};

export default ButtonCommon;