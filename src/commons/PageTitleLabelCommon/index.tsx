import React from 'react';
import {PageTitleLabel, PageTitleWrapper } from './styled';

interface IProps {
  children?: React.ReactNode;
}

const PageTitleLabelCommon: React.FC<IProps> = ({ children }) => {
  
  return (
    <>
        <PageTitleWrapper><PageTitleLabel>{children}</PageTitleLabel></PageTitleWrapper>
    </>
  );
};

export default PageTitleLabelCommon;