import React, { useState, useEffect } from 'react';
import { TitleAndDescriptionContainerStyled, ButtonsContainerStyled, ModalSignUpWrapperStyled, StepsButtonsContainerStyled, SaveButtonStyled, SeparateLineStyled, ContentOneContainerStyled, StepWrapperStyled, ContentTwoContainerStyled } from './styled';
import ModalDWCommon from '../../commons/ModalCommon';
import TitleDWCommon from '../../commons/TitleDWCommon';
import InputDWCommon from '../../commons/InputCommon';
import UserTypeButtonCommon from '../../commons/UserTypeButtonCommon';
import ButtonCommon from '../../commons/ButtonCommon';
import SubtitleCommon from '../../commons/SubtitleCommon';
import InputCommon from '../../commons/InputCommon';

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
  const [signUpData, setSignUpData] = useState({
    userType: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<string | null>(null)

  const renderSaveButtons = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const isActive = currentStep > index;
      return (
        <SaveButtonStyled key={index} $active={isActive}>
          {index + 1}
        </SaveButtonStyled>
      );
    });
  };

  const handleNextClick = () => {
      setCurrentStep(prevStep => prevStep + 1);
  };
  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  function encodeStringAsKey(input: string | null): string {
    if (typeof input === 'string') {
        return encodeURIComponent(input);
    } else {
        return ''; // Return an empty string or handle null input as required
    }
  }

  const fetchData = async () => {
    try {
      const address = `61 Rua José Vilar, Fortaleza, CE, Brasil`;
      const encodedAddress = encodeURIComponent(address);
      const link = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`;
      const response = await fetch(link);
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const stepOne = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Tipo de usuário
      </SubtitleCommon>
      <ContentOneContainerStyled>
        <UserTypeButtonCommon onClick={() => setUserType('contractor')} label='Contratante' variant='contractor' $isActive={userType === 'contractor'}/>
        <UserTypeButtonCommon onClick={() => setUserType('service')} label='Prestador de serviços' variant='service' $isActive={userType === 'service'}/>
      </ContentOneContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outline" onClick={onCancel}>
          Cancelar
        </ButtonCommon>
        <ButtonCommon 
          $isDisabled={!userType} 
          onClick={handleNextClick}
          variant={!userType ? ('disabled') : undefined}
        >Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepTwo = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Credenciais de Acesso
      </SubtitleCommon>
      <ContentTwoContainerStyled>
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
      </ContentTwoContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outline" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepThree = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Informações Gerais do Usuário
      </SubtitleCommon>
      <ContentOneContainerStyled>
        <InputCommon
          label='Nome'
          placeholder='Nome do usuário'
        />
        <InputCommon
          label='Sobrenome'
          placeholder='Nome do usuário'
        />
      </ContentOneContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outline" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  
  const stepFour = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Localização
      </SubtitleCommon>
      <ContentTwoContainerStyled>
        <InputCommon
          label='Email'
          placeholder='ex: joao@gmail.com'
        />
        <InputCommon
          label='Senha'
          placeholder='Digite sua senha'
          type='password'
        />
        <InputCommon
          label='Confirmar senha'
          placeholder='Confirme sua senha'
          type='password'
        />
      </ContentTwoContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outline" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepFive = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Sobre o serviço {userType === 'contractor' ? 'eu procuro' : 'eu presto'}
      </SubtitleCommon>
      <ContentTwoContainerStyled>
        <InputCommon
          label='Email'
          placeholder='ex: joao@gmail.com'
        />
        <InputCommon
          label='Senha'
          placeholder='Digite sua senha'
          type='password'
        />
        <InputCommon
          label='Confirmar senha'
          placeholder='Confirme sua senha'
          type='password'
        />
      </ContentTwoContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outline" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleSignUp}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  return (
    <ModalDWCommon onClickOut={onClickOut} variant='square-medium'>
      <ModalSignUpWrapperStyled>
      <StepsButtonsContainerStyled>
            {renderSaveButtons()}
          </StepsButtonsContainerStyled>
          <TitleDWCommon tag="h3" variant="modal">
            Cadastro
          </TitleDWCommon>
          <SeparateLineStyled />
           <StepWrapperStyled
            $isVisible={currentStep === 1}
            $isCurrent={currentStep === 1}
          >
            {stepOne()}
          </StepWrapperStyled>
          <StepWrapperStyled
            $isVisible={currentStep === 2}
            $isCurrent={currentStep === 2}
          >
            {stepTwo()}
          </StepWrapperStyled>
                    <StepWrapperStyled
            $isVisible={currentStep === 3}
            $isCurrent={currentStep === 3}
          >
            {stepThree()}
          </StepWrapperStyled>
          <StepWrapperStyled
            $isVisible={currentStep === 4}
            $isCurrent={currentStep === 4}
          >
            {stepFour()}
          </StepWrapperStyled>
          <StepWrapperStyled
            $isVisible={currentStep === 5}
            $isCurrent={currentStep === 5}
          >
            {stepFive()}
          </StepWrapperStyled>
        </ModalSignUpWrapperStyled>
    </ModalDWCommon>
  );
};

export default ModalSignUpComponent;