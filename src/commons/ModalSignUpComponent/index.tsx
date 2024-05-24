import React, { useState, useEffect } from 'react';
import { TitleAndDescriptionContainerStyled, ButtonsContainerStyled, ModalSignUpWrapperStyled } from './styled';
import ModalDWCommon from '../ModalCommon';
import TitleDWCommon from '../TitleDWCommon';
import InputDWCommon from '../InputCommon';
import ButtonDWCommon from '../ButtonCommon';

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {
  onCancel: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: () => void;
  inputRequiredErrorList?: IErrorObject | null;
  onClickOut?: () => void;
}

const ModalSignUpComponent: React.FC<IProps> = ({ 
  onCancel,
  onChange,
  handleSignUp,
  inputRequiredErrorList,
  onClickOut
}) => {

  return (
    <ModalDWCommon onClickOut={onClickOut} variant='square-medium'>
      <ModalSignUpWrapperStyled>
        <TitleAndDescriptionContainerStyled>
          <TitleDWCommon tag="h3" variant='modal'>Cadastro</TitleDWCommon>
        </TitleAndDescriptionContainerStyled>
          <InputDWCommon
            name='signUpEmail'
            label="Email"
            placeholder="Digite seu email"
            type="text"
            onChange={onChange}
            inputRequiredErrorList={inputRequiredErrorList}
          />
          <InputDWCommon
            name='signUpPassword'
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            onChange={onChange}
            inputRequiredErrorList={inputRequiredErrorList}
          />
          <InputDWCommon
            name='signUpConfirmPassword'
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            type="password"
            onChange={onChange}
            inputRequiredErrorList={inputRequiredErrorList}
          />
          <ButtonsContainerStyled>
            <ButtonDWCommon onClick={onCancel} variant="outline">Cancelar</ButtonDWCommon>
            <ButtonDWCommon onClick={handleSignUp}>Cadastrar</ButtonDWCommon>
          </ButtonsContainerStyled>
        </ModalSignUpWrapperStyled>
    </ModalDWCommon>
  );
};

export default ModalSignUpComponent;