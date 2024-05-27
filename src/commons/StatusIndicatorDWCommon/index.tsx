import React from 'react';
import { ActiveStatusStyled, InactiveStatusStyled, StatusIndicatorRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  isActive?: true | false; 
}

const StatusIndicatorDWCommon: React.FC<IProps> = ({ children, isActive }) => {

  return isActive? (
      <ActiveStatusStyled>Ativo</ActiveStatusStyled>
    ) : 
    (
      <InactiveStatusStyled>Inativo</InactiveStatusStyled>
    );
};

export default StatusIndicatorDWCommon;