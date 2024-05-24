import React from 'react';
import { PageLayoutRootStyled } from './styled';

interface IProps {
  children?: React.ReactNode;
}

const PageLayoutRootCommon: React.FC<IProps> = ({ children }) => {
  return <PageLayoutRootStyled>{children}</PageLayoutRootStyled>;
};

export default PageLayoutRootCommon;