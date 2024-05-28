import React, { useState, useEffect } from 'react';
import { InputLabelStyled, InputFieldStyled, InputElementContainerStyled, ToggleButtonStyled, InputContainerStyled, InputErrorAlertWrapperStyled, InputErrorIconStyled, InputErrorAlertContainerStyled, InputErrorAlertMsgStyled } from './styled';
import hidePasswordIcon from '../../assets/icons/HidePasswordIcon.svg';
import viewPasswordIcon from '../../assets/icons/ViewPasswordIcon.svg';

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRequiredErrorList?: IErrorObject | null;
  width?: string;
}

const InputCommon: React.FC<IProps> = ({ 
  name,
  label, 
  placeholder, 
  type = 'text', 
  value, 
  onChange,
  inputRequiredErrorList,
  width = '100%'
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    // Check if the current input name is in the error list
    if (inputRequiredErrorList && inputRequiredErrorList.fields.includes(name || '')) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [name, inputRequiredErrorList]);

  const handleInputFocus = () => {
    setInputError(false);
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const getErrorDescription = (errorType: string): string => {
    switch (errorType) {
      case 'InvalidRtsp':
        return 'Validação obrigatória';
      case 'requiredField':
        return 'Campo obrigatório';
      case 'invalidEmail':
        return 'Email inválido';
      case 'shortPassword':
        return 'Senha muito curta';
      case 'differentPasswords':
        return 'Senhas diferentes';
      case 'wrongCode':
        return 'Código Incorreto';
      case 'alreadyExist':
        return 'Opção já existente';
      default:
        return 'Erro desconhecido';
    }
  };

  return (
    <InputContainerStyled $width={width}>
      <InputLabelStyled>{label}<InputErrorAlertContainerStyled>
        {inputRequiredErrorList && inputError && (<InputErrorAlertWrapperStyled><InputErrorIconStyled/><InputErrorAlertMsgStyled>{getErrorDescription(inputRequiredErrorList.type)}</InputErrorAlertMsgStyled></InputErrorAlertWrapperStyled>)}
      </InputErrorAlertContainerStyled></InputLabelStyled>
      <InputElementContainerStyled>
        <InputFieldStyled
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={(type === 'password' || type === 'confirmPassword') ? 'Pelo menos 8 caracteres' : placeholder}
          onChange={onChange}
          $state={inputError ? 'error' : undefined}
          onFocus={handleInputFocus}
          autoComplete={(type === 'password') ? 'new-password' : 'off'} // Set autocomplete="off"
          width={width}
          value={value}
          />  
        {type === 'password' && (
          <ToggleButtonStyled onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src={viewPasswordIcon} alt='' height='20px' />
            ) : (
              <img src={hidePasswordIcon} alt='' height='20px' />
            )}
          </ToggleButtonStyled>
        )}
      </InputElementContainerStyled>
    </InputContainerStyled>
  );
};

export default InputCommon;