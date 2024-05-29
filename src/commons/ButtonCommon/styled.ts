import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

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


const ButtonBaseRootStyled = styled.button`
  //align-self: center;
  background-color: #3BEAB3;
  border: none;
  color: #101213;
  height: 2.25rem;
  letter-spacing: 0.1em;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  width: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 3px #3BEAB3;
  text-wrap: nowrap;
  user-select: none;
  font-weight: 700;

  ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.carrotOrange};`)};
  ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.carrotOrange};`)};

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
`

const isActiveStyle = css`
      background-color: #3BEAB3;
      color: ${colors.Black};
      border: solid 3px #3BEAB3;

      ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors.Wine};`)}; 
      ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Yellow};`)}; 
      ${(props) => props.theme?.colors && (`color: ${props.theme?.colors.Wine};`)}; 
    `;

export const ButtonRootStyled = styled(ButtonBaseRootStyled)<{
  $variant?: 'outline' | 'disabled' | 'default' | 'warning' | 'defaultSmall' | 'warningSmall' | 'outlineDarker';
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined;
  height?: string;
  fontSize?: string;
}>`

  ${(props) => {
    switch (props.$variant) {
      case "outline":
        return css`
          background-color: transparent;
          border: solid 3px #3BEAB3;
          color: #3BEAB3;
          height: 2.3rem;
          text-align: center;
          justify-content: center;

          ${(props) => props.theme?.colors?.carrotOrange && (`border: solid 3px ${props.theme?.colors?.Black};`)};
          ${(props) => props.theme?.colors?.carrotOrange && (`color: ${props.theme?.colors?.Black};`)};

          &:hover {
            background-color: transparent;
            border: solid 3px ${colors.Principal300};
            color: ${colors.Principal300};

            ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Cinza700};`)};
            ${(props) => props.theme?.colors && (`color: ${props.theme?.colors?.Cinza700};`)};

          }

          &:active {
            border: solid 3px ${colors.Principal200};
            color: ${colors.Principal200};
          }
        `;
      case "outlineDarker":
        return css`
          background-color: transparent;
          border: solid 3px #0C2454;
          color: #0C2454;
          height: 2.3rem;
          text-align: center;
          justify-content: center;

          ${(props) => props.theme?.colors?.carrotOrange && (`border: solid 3px ${props.theme?.colors?.Black};`)};
          ${(props) => props.theme?.colors?.carrotOrange && (`color: ${props.theme?.colors?.Black};`)};

          &:hover {
            background-color: transparent;
            border: solid 3px ${colors.Principal300};
            color: ${colors.Principal300};

            ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Cinza700};`)};
            ${(props) => props.theme?.colors && (`color: ${props.theme?.colors?.Cinza700};`)};

          }

          &:active {
            border: solid 3px ${colors.Principal200};
            color: ${colors.Principal200};
          }
        `;
      case "disabled":
        return css`
          border: 3px solid ${colors.Cinza1000};
          background-color: ${colors.Cinza1000};
          opacity: 0.5;
          color: ${colors.Cinza100};
          cursor: not-allowed;

          //${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Black};`)};
          //${(props) => props.theme?.colors && (`color: ${props.theme?.colors?.Black};`)};
          //${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.Cinza800};`)};

          &:hover {
            border: 3px solid ${colors.Cinza1000};
            background-color: ${colors.Cinza1000};
            opacity: 0.5;
            color: ${colors.Cinza100};
            cursor: not-allowed;

            /* ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Black};`)};
            ${(props) => props.theme?.colors && (`color: ${props.theme?.colors?.Black};`)};
            ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.Cinza800};`)}; */

          }

          /* &:active {
            background-color: ${colors.DarkTheme400}; /* Same color as the base background */
           // border: 3px solid ${colors.DarkTheme800}; /* Same border color as the base */
           // color: ${colors.DarkTheme800}; /* Same text color as the base */

           // ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors?.Black};`)};
           // ${(props) => props.theme?.colors && (`color: ${props.theme?.colors?.Black};`)};
           // ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors?.Cinza800};`)};
          //} 
        `
      case "default":
        return css`
          ${ButtonBaseRootStyled}{}
        `
      case "warning":
        return css`
          color: ${colors.Cinza100};
          background-color: ${colors.Perigo400};
            border: solid 3px ${colors.Perigo400};

          &:hover {
            background-color: ${colors.Perigo500};
          border: solid 3px ${colors.Perigo500};  

          }

          &:active {
            background-color: ${colors.Perigo400};
            border: solid 3px ${colors.Perigo500};
          }
        `;
        case "defaultSmall":
          return css`
              background-color: transparent;
              height: 1.6rem;
              font-size: 0.7rem;
            
          `
        case "warningSmall":
          return css`
            
              height: 1.6rem;
              font-size: 0.7rem;
              color: ${colors.Cinza100};
              background-color: ${colors.Perigo400};
                border: solid 3px ${colors.Perigo400};

              &:hover {
                background-color: ${colors.Perigo500};
              border: solid 3px ${colors.Perigo500};  

              }

              &:active {
                background-color: ${colors.Perigo400};
                border: solid 3px ${colors.Perigo500};
              }
          `
      
      default:
        return css`
        ${ButtonBaseRootStyled}{}
        `;
    }
  }}
  ${(props) => props.$isDisabled && isDisabledStyle}
  ${(props) => props.$isActive && isActiveStyle}

`;

const ButtonIconVariantBased = styled.img``

export const ButtonIconVariant = styled(ButtonIconVariantBased)<{
  $icon?: 'exportBlue' | 'exportWhite' ;
}>`
  ${(props) => {
    switch (props.$icon) {
      case "exportBlue":
        return css`

        `
      case "exportWhite":
        return css`

        `
      default:
        return css`
        `
    }
  }
}`