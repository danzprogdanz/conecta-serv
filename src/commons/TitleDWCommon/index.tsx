import React from 'react';
import { TitleRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3';
  variant?: 'modal' | 'subtitle' | 'sectionTitle'; 
}

const TitleDWCommon: React.FC<IProps> = ({ children, tag = 'h2', variant }) => {

  return <TitleRootStyled as={tag} $variant={variant}>{children}</TitleRootStyled>;
};

export default TitleDWCommon;