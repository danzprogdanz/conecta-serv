import React, { useState } from "react";
import {
  ButtonsContainerStyled,
  ModalSignUpWrapperStyled,
  StepsButtonsContainerStyled,
  SaveButtonStyled,
  SeparateLineStyled,
  ContentOneContainerStyled,
  StepWrapperStyled,
} from "./styled";
import ModalCommon from "../../../../commons/ModalCommon";
import ButtonCommon from "../../../../commons/ButtonCommon";
import SubtitleCommon from "../../../../commons/SubtitleCommon";
import TitleCommon from "../../../../commons/TitleCommon";

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {
  onCancel: () => void;
  onClickOut?: () => void;
}

const ModalSendFeedbackComponent: React.FC<IProps> = ({
  onCancel,
  onClickOut,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorState, setErrorState] = useState<{ type: string; fields: string[] }>({ type: '', fields: [] });

  const renderSaveButtons = () => {
    return Array.from({ length: 10 }, (_, index) => {
      const isActive = currentStep > index;
      return (
        <SaveButtonStyled key={index} $active={isActive}>
          {index + 1}
        </SaveButtonStyled>
      );
    });
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const stepOne = () => (
    <>
      <SubtitleCommon variant="subtitle">1 | Informações do usuário</SubtitleCommon>
      <ContentOneContainerStyled>
        {/* Add content here */}
      </ContentOneContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={onCancel}>
          Cancelar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>
          Próximo
        </ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepTwo = () => (
    <>
      <SubtitleCommon variant="subtitle">Tipo de usuário</SubtitleCommon>
      <ContentOneContainerStyled>
        {/* Add content here */}
      </ContentOneContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={onCancel}>
          Cancelar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>
          Próximo
        </ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  return (
    <ModalCommon onClickOut={onClickOut} variant="square-medium">
      <ModalSignUpWrapperStyled>
        <StepsButtonsContainerStyled>
          {renderSaveButtons()}
        </StepsButtonsContainerStyled>
        <TitleCommon tag="h3" variant="modal">
          Cadastro
        </TitleCommon>
        <SeparateLineStyled />
        <StepWrapperStyled
          $isVisible={currentStep === 1}
          $isCurrent={currentStep === 1}
        >
          {stepOne()}
        </StepWrapperStyled>
      </ModalSignUpWrapperStyled>
    </ModalCommon>
  );
};

export default ModalSendFeedbackComponent;
