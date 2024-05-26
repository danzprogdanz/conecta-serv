import React from 'react';
import { SubtitleRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
  variant?: 'modal' | 'subtitle' | 'subtitle-s1'; 
}

const SubtitleCommon: React.FC<IProps> = ({ children, variant }) => {

  return <SubtitleRootStyled $variant={variant}>{children}</SubtitleRootStyled>;
};

export default SubtitleCommon;