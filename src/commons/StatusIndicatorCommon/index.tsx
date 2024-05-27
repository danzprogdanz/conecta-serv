import React from 'react';
import { ActiveStatusStyled, InactiveStatusStyled, StatusIndicatorRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  isActive?: true | false;
  visibility?: boolean;  
}

const StatusIndicatorCommon: React.FC<IProps> = ({ children, isActive, visibility }) => {

  return isActive? (
      <ActiveStatusStyled $visibility={visibility}>Ativo</ActiveStatusStyled>
    ) : 
    (
      <InactiveStatusStyled $visibility={visibility}>Inativo</InactiveStatusStyled>
    );
};

export default StatusIndicatorCommon;