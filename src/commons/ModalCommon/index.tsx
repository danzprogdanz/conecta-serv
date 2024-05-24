import React, { useEffect, useRef, useState } from "react";
import { ModalBackgroundStyled, ModalRootContainerStyled } from "./styled";

interface IProps {
  children?: React.ReactNode;
  variant?:
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "square-medium"
    | undefined;
  onClickOut?: () => void ;
}

const ModalCommon: React.FC<IProps> = ({ children, variant, onClickOut }) => {
  const modalElementREF = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalElementREF.current &&
      !modalElementREF.current.contains(event.target as Node)
    ) {
      onClickOut?.();
    }
  };

  return (
        <ModalBackgroundStyled >
          <ModalRootContainerStyled $variant={variant} ref={modalElementREF}>
            {children}
          </ModalRootContainerStyled>
        </ModalBackgroundStyled>
  );
};

export default ModalCommon;
