import React, { useState, useEffect } from 'react';
import { LabelStyled, TextBoxRootWrapperStyled, TextBoxStyled } from './styled';
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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRequiredErrorList?: IErrorObject | null;
  width?: string;
}

const TextBoxCommon: React.FC<IProps> = ({ 
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
    <TextBoxRootWrapperStyled>
      <LabelStyled>{label}</LabelStyled>
      <TextBoxStyled
        name={name}
        onChange={onChange}
        value={value}
      />
    </TextBoxRootWrapperStyled>
  );
};

export default TextBoxCommon;