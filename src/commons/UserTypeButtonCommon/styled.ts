import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

import ContractorUserIcon from '../../assets/icons/UserContratorsIcon.svg';
import ServicesProviderUserIcon from '../../assets/icons/UserServiceProvidersIcon.svg';

export const UserTypeRootContainerStyled = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserTypeLabelStyled = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: ${colors.Black};
  font-weight: 600;
  margin-bottom: 0.4rem;
`

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
  background-color: #576B65;
  border: none;
  color: #101213;
  height: 8rem;
  letter-spacing: 0.1em;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  width: 8rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //border: solid 3px #3BEAB3;
  text-wrap: nowrap;
  user-select: none;
  font-weight: 700;
  opacity: 0.5;

  &:hover{
    background-color: ${colors.Principal300};
  }

  &:active{
    background-color: ${colors.Principal400};
    border: solid 3px ${colors.Principal200};
  }
`

const isActiveStyle = css`
      border: solid 5px ${colors.Principal100};
      background-color: ${colors.Principal300};
      color: ${colors.Principal800};
      opacity: 1;

      &:hover{
        border: solid 3px ${colors.Principal100};
        background-color: ${colors.Principal300};
        color: ${colors.Principal800};
        cursor: auto;
      }
    `;

export const ButtonRootStyled = styled(ButtonBaseRootStyled)<{
  $isDisabled?: boolean | undefined;
  $isActive?: boolean | undefined | null;
  height?: string;
  fontSize?: string;
}>`
  ${(props) => props.$isDisabled && isDisabledStyle}
  ${(props) => props.$isActive && isActiveStyle}

`;

export const UserTypeIconStyled = styled.img<{
  $variant?: 'contractor' | 'service';
}>`
  height: 7rem;
  width: 7rem;

  ${(props) => {
    switch (props.$variant) {
      case "contractor":
        return css`
            content: url(${ContractorUserIcon})
        `;
      case "service":
        return css`
        content: url(${ServicesProviderUserIcon})

        `
      
      default:
        return css`
        `;
    }
  }}
`