import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";
import { buttonsVariants, getButtonStyles, getIconStyles } from "../../utils/SmallButtonHelper";

export const ToolTipStyled = styled.div`
  display:  none;
  align-self: flex-end;
  position: absolute;
  background-color: rgba(249, 249, 250);
  height: 25px;
  width: 75px;
  color: black;
  text-align: center;
  z-index: 99999;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  justify-self: center;
  margin-left: 15rem;
  transform: translateX(25%);
  transition: 0.5s ease-in-out;
`;

export const BaseSmallButtonStyled = styled.button<{
  $width?: string,
  $height?: string,
}>`
  height: ${(props) => props.$height || '35px'};
  width: ${(props) => props.$width || '35px'};
  display: flex;
  border: transparent;
  justify-content: center;
  align-items: center;
  background-color: ${colors.Principal400};
  outline: none;
  color: ${colors.Cinza100};
  cursor: pointer;

  ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.carrotOrange};`)};

  &:hover{
    background-color: ${colors.Principal300};
    ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.Yellow};`)};

  }

  &:active{
    background-color: ${colors.Principal400};
    border: solid 3px ${colors.Principal200};

    ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.carrotOrange};`)};
    ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Wine};`)};

  }

  &:hover + ${ToolTipStyled} {
    display: flex;
  }
`;

export const BaseIcon = styled.img`
  user-select: none;
`; 

const isDisabledStyle = css`
    border: 3px solid ${colors.DarkTheme800};
          background-color: ${colors.DarkTheme400};
          color: ${colors.DarkTheme800};
          cursor: not-allowed;

          &:hover,
          &:active {
            background-color: ${colors.DarkTheme400}; /* Same color as the base background */
            border: 3px solid ${colors.DarkTheme800}; /* Same border color as the base */
            color: ${colors.DarkTheme800}; /* Same text color as the base */
          }
  `

export const SmallButtonVariant = styled(BaseSmallButtonStyled)<{
  $variant?: keyof typeof buttonsVariants;
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined;
  $width?: string;
}>`
  ${(props) => getButtonStyles({ variant: props.$variant, isActive: props.$isActive, $width: props.$width })}
  ${(props) => props.$isDisabled && isDisabledStyle}
`;

export const SmallIconVariant = styled(BaseIcon)<{
  $variant?: keyof typeof buttonsVariants;
  $isActive?: boolean | undefined;
}>`
  /*  */
`;

export const SmallButtonRootContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`