import React from 'react';
import { SmallButtonRootContainerStyled, SmallButtonVariant, SmallIconVariant, ToolTipStyled } from './styled';
//import { buttonsVariants } from '../../utils/SmallButtonHelper';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  //variant?: keyof typeof buttonsVariants;
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined;
  tooltipContent?: string | null;
  $width?: string;
  $height?: string;
}

const SmallButtonCommon: React.FC<IProps> = ({ tooltipContent, onClick, /* variant, */ $isDisabled, $isActive, children, $width, $height }) => { 
  return (
    <SmallButtonRootContainerStyled>
      <SmallButtonVariant onClick={onClick} /* $variant= {variant}*/ $isDisabled={$isDisabled} $isActive={$isActive} $width={$width} $height={$height} disabled={$isDisabled}>
        <SmallIconVariant /* $variant={variant} */ />
        {children}
      </SmallButtonVariant>
      {tooltipContent && <ToolTipStyled>{tooltipContent}</ToolTipStyled>}
    </SmallButtonRootContainerStyled> 
  );
}

export default SmallButtonCommon;