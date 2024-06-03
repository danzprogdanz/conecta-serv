import React, { useState, useEffect } from "react";
import {
  TitleAndDescriptionContainerStyled,
  ButtonsContainerStyled,
  ModalSignUpWrapperStyled,
  StepsButtonsContainerStyled,
  SaveButtonStyled,
  SeparateLineStyled,
  ContentOneContainerStyled,
  StepWrapperStyled,
  ContentTwoContainerStyled,
  ContentThreeContainerStyled,
  FirstLineInputsContainer,
  ContentFiveContainerStyled,
  SelectedAnalyticsContainerStyled,
  SelectedAnalyticsTagStyled,
  SelectedAnalyticsColorStyled,
  RemoveOptionIconStyled,
  InputTagsWrapperStyled,
  InputWrapperStyled,
  AddTagButtonStyled,
  CustomButtonStyled,
  InputPDFUploadStyled,
} from "./styled";
import ModalDWCommon from "../../commons/ModalCommon";
import TitleDWCommon from "../../commons/TitleCommon";
import InputDWCommon from "../../commons/InputCommon";
import UserTypeButtonCommon from "../../commons/UserTypeButtonCommon";
import ButtonCommon from "../../commons/ButtonCommon";
import SubtitleCommon from "../../commons/SubtitleCommon";
import InputCommon from "../../commons/InputCommon";
import { IUserData } from "../../interfaces/auth";
import TextBoxCommon from "../../commons/TextBoxCommon";
import { RemoveOptionButtonStyled } from "../MapLeafLetComponent/styled";
import { scheduleConfigsExceptionModel, schedulesConfigsDefault } from "../../models/schedulesSettings";
import { userSchedulesModel } from "../../models/userSchedules";

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {
  onCancel: () => void;
  onSignUp: (userType: IUserData) => void;
  inputRequiredErrorList?: IErrorObject | null;
  onClickOut?: () => void;
}

const ModalSignUpComponent: React.FC<IProps> = ({
  onCancel,
  onSignUp,
  inputRequiredErrorList,
  onClickOut,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<string | null>(null);
  const [tagInputValue, setTagInputValue] = useState<string>('');
  const [tagsList, setTagsList] = useState<string[]>([]);
  const [userData, setUserData] = useState<IUserData>({
    userType: null,
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirmPassword: "",
    name: "",
    lastName: "",
    cellNumber: "",
    organization: "",
    addressNumber: "",
    street: "",
    district: "",
    complement: "",
    description: "",
    tagsList: [],
    schedulesConfigs: schedulesConfigsDefault,
    schedulesConfigsExceptions: scheduleConfigsExceptionModel,
    userSchedules: userSchedulesModel,
    coordinates: {lat: 0, lon: 0},
    status: true,
  });
  const [errorState, setErrorState] = useState<{type: string, fields: string[]}>({ type: '', fields: [] });

  useEffect(() => {
    if(userData.adressNumber !== '' && userData.adressNumber !== null && userData.street !== '' && userData.street !== null) {
      getLatLong(userData.adressNumber, userData.street)
        .then((result) => {
          setUserData((prevData) => ({
            ...prevData,
            coordinates: result,
          }));
        })
    }
    console.log(userData)
  }, [userData.adressNumber, userData.street])

  const renderSaveButtons = () => {
    return Array.from(
      { length: userType === "service" ? 6 : 5 },
      (_, index) => {
        const isActive = currentStep > index;
        return (
          <SaveButtonStyled key={index} $active={isActive}>
            {index + 1}
          </SaveButtonStyled>
        );
      }
    );
  };

  const handleNextClick = () => {

    if (currentStep === 2) {
      const requiredFields = ['signUpEmail', 'signUpPassword', 'signUpConfirmPassword'];
      const missingFields = requiredFields.filter(field => !userData[field] || userData[field] === '');
      const differentPassword = ['signUpConfirmPassword'];

      if (missingFields.length > 0) {
        setErrorState({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }
      if (userData.signUpPassword !== userData.signUpConfirmPassword) {
        setErrorState({
          type: "differentPasswords",
          fields: differentPassword,
        });
        return;
      }
    }

    if (currentStep === 3) {
      const requiredFields = ['name', 'lastName', 'cellNumber'];
      const missingFields = requiredFields.filter(field => !userData[field] || userData[field] === '');
  
      if (missingFields.length > 0) {
        setErrorState({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }
    }

    if (currentStep === 4) {
      const requiredFields = ['adressNumber', 'street', 'district'];
      const missingFields = requiredFields.filter(field => !userData[field] || userData[field] === '');
  
      if (missingFields.length > 0) {
        setErrorState({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }
    }

    if (currentStep === 5) {
      const requiredFields = ['tags'];

      const missingFields = requiredFields.filter(field => {
        const value = userData[field];
        return (typeof value === 'string' || Array.isArray(value)) && value.length === 0;
      });

      if (missingFields.length > 0) {
        setErrorState({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  function encodeStringAsKey(input: string | null): string {
    if (typeof input === "string") {
      return encodeURIComponent(input);
    } else {
      return ""; // Return an empty string or handle null input as required
    }
  }

  const getLatLong = async (
    number: string, 
    street: string, 
    city: string = "Fortaleza", 
    state: string = "CE", 
    country: string = "Brasil", 
    postalCode?: string
  ) => {
    try {
      console.log(number, street);
      let address = `${number} ${street}, ${city}, ${state}, ${country}`;
      if (postalCode) {
        address += `, ${postalCode}`;
      }
      const encodedAddress = encodeURIComponent(address);
      const link = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&limit=1`;
      const response = await fetch(link);
      if (response.ok) {
        const jsonData = await response.json();
        if (jsonData.length > 0) {
          const { lat, lon } = jsonData[0];
          return { lat: parseFloat(lat), lon: parseFloat(lon) };
        } else {
          return { lat: 0, lon: 0 };
        }
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  
  

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      userType: userType,
    }));
  }, [userType]);

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      tagsList: tagsList,
    }));
  }, [tagsList])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'tags') {
      const tagsArray = value.trim().split(' ');

      // Check if there is only one word
      if (tagsArray.length === 1) {
        setTagInputValue(value.trim());
      } 
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    // to clean input errors when start typing
    setErrorState({ type: '', fields: [] });
}, [userData]);

const removeTag = (valueToRemove: string) => {
  setTagsList((prevSelected) => 
    prevSelected.filter((value) => value !== valueToRemove)
  );
};

const handleAddTag = () => {
  const trimmedTag = tagInputValue.trim();
  if (trimmedTag !== '' && !tagsList.includes(trimmedTag)) {
    setTagsList((prevSelected) => [...prevSelected, trimmedTag]);
  }
  setTagInputValue('');
};

  const handleSignUp = () => {

    if (currentStep === 5) {
      const requiredFields = ['tags'];
      const missingFields = requiredFields.filter(field => {
        const value = userData[field];
        return (typeof value === 'string' || Array.isArray(value)) && value.length === 0;
      });

      if (missingFields.length > 0) {
        setErrorState({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }
    }

    console.log('userData', userData)

    onSignUp(userData)
  } 

  const FileUploadComponent = () => {
    const handleFileChange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
        // Perform actions with the selected file (e.g., upload it to a server)
      }
    };
  
    return (
      <div>
        <InputPDFUploadStyled
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <CustomButtonStyled htmlFor="pdf-upload">Upload PDF</CustomButtonStyled>
      </div>
    );
  };
  

  const stepOne = () => (
    <>
      <SubtitleCommon variant="subtitle">Tipo de usuário</SubtitleCommon>
      <ContentOneContainerStyled>
        <UserTypeButtonCommon
          onClick={() => setUserType("contractor")}
          label="Contratante"
          variant="contractor"
          $isActive={userType === "contractor"}
        />
        <UserTypeButtonCommon
          onClick={() => setUserType("service")}
          label="Prestador de serviços"
          variant="service"
          $isActive={userType === "service"}
        />
      </ContentOneContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={onCancel}>
          Cancelar
        </ButtonCommon>
        <ButtonCommon
          $isDisabled={!userType}
          onClick={handleNextClick}
          variant={!userType ? "disabled" : undefined}
        >
          Próximo
        </ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepTwo = () => (
    <>
      <SubtitleCommon variant="subtitle">Credenciais de Acesso</SubtitleCommon>
      <ContentTwoContainerStyled>
        <InputDWCommon
          name="signUpEmail"
          label="Email"
          placeholder="Digite seu email"
          type="text"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
        <InputDWCommon
          name="signUpPassword"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
        <InputDWCommon
          name="signUpConfirmPassword"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          type="password"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
      </ContentTwoContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
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
      <ContentThreeContainerStyled>
        <FirstLineInputsContainer>
          <InputCommon
            name="name"
            label="Nome *"
            placeholder="Nome do usuário"
            onChange={handleChange}
            inputRequiredErrorList={{
              type: errorState.type,
              fields: errorState.fields,
            }}
          />
          <InputCommon
            name="lastName"
            label="Sobrenome *"
            placeholder="Sobrenome do usuário"
            onChange={handleChange}
            inputRequiredErrorList={{
              type: errorState.type,
              fields: errorState.fields,
            }}
          />
        </FirstLineInputsContainer>
        <InputCommon
          name="cellNumber"
          label="Número de contato *"
          placeholder="(11) 99999-9999"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
        <InputCommon
          name="organization"
          label="Oranização ou nome fantasia"
          placeholder="Organização ou nome fantasia"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
      </ContentThreeContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepFour = () => (
    <>
      <SubtitleCommon variant="subtitle">Localização</SubtitleCommon>
      <ContentThreeContainerStyled>
        <FirstLineInputsContainer>
          <InputCommon
            name="adressNumber"
            label="Número *"
            placeholder="ex: 34"
            onChange={handleChange}
            inputRequiredErrorList={{
              type: errorState.type,
              fields: errorState.fields,
            }}
          />
          <InputCommon
            name="street"
            label="Rua *"
            placeholder="Digite a rua"
            onChange={handleChange}
            inputRequiredErrorList={{
              type: errorState.type,
              fields: errorState.fields,
            }}
          />
        </FirstLineInputsContainer>
        <InputCommon
          name="district"
          label="Bairro *"
          placeholder="Aldeota"
          onChange={handleChange}
          inputRequiredErrorList={{
            type: errorState.type,
            fields: errorState.fields,
          }}
        />
        <InputCommon
          name="complement"
          label="Complemento"
          placeholder="Confirme sua senha"
          onChange={handleChange}
        />
      </ContentThreeContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  const stepFive = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Sobre o serviço {userType === "contractor" ? "eu procuro" : "eu presto"}
      </SubtitleCommon>
      <ContentFiveContainerStyled>
        <TextBoxCommon
          name="description"
          label="Descrição *"
          onChange={handleChange}
          value={userData.description}
          placeholder={
            userType === "contractor"
              ? "Escreva uma descrição do serviço que você procura."
              : "Escreva uma descrição do serviço que você oferece."
          }
        />
        <InputTagsWrapperStyled>
          <InputWrapperStyled>
            <InputCommon 
              name='tags'
              label="Tags" 
              placeholder="Digite tags"
              onChange={handleChange}
              value={tagInputValue}
              inputRequiredErrorList={{
                type: errorState.type,
                fields: errorState.fields,
              }}
            />
            <AddTagButtonStyled onClick={handleAddTag}> + </AddTagButtonStyled>
          </InputWrapperStyled>
          <SelectedAnalyticsContainerStyled>
            {tagsList &&
              Array.isArray(tagsList) &&
              tagsList.map((el) => (
                <SelectedAnalyticsTagStyled key={Math.random()}>
                  <SelectedAnalyticsColorStyled>
                    {el}
                  </SelectedAnalyticsColorStyled>
                  <RemoveOptionButtonStyled onClick={() => {removeTag(el)}}>
                    <RemoveOptionIconStyled />
                  </RemoveOptionButtonStyled>
                </SelectedAnalyticsTagStyled>
              ))}
          </SelectedAnalyticsContainerStyled>
        </InputTagsWrapperStyled>
      </ContentFiveContainerStyled>
      <ButtonsContainerStyled>
        {userType === "contractor" ? (
          <>
            <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
              Voltar
            </ButtonCommon>
            <ButtonCommon
              onClick={() => userData && handleSignUp()}
              $isDisabled={!userType}
            >
              Finalizar
            </ButtonCommon>
          </>
        ) : (
          <>
            <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
              Voltar
            </ButtonCommon>
            <ButtonCommon onClick={handleNextClick}>Próximo</ButtonCommon>
          </>
        )}
      </ButtonsContainerStyled>
    </>
  );

  const stepSix = () => (
    <>
      <SubtitleCommon variant="subtitle">
        Adicione o portifólio{" "}
        {userType === "contractor" ? "da empresa" : "do serviço"}
      </SubtitleCommon>
      <ContentFiveContainerStyled>
        <FileUploadComponent/>
      </ContentFiveContainerStyled>
      <ButtonsContainerStyled>
        <ButtonCommon variant="outlineDarker" onClick={handleBackClick}>
          Voltar
        </ButtonCommon>
        <ButtonCommon
          onClick={() => userData && onSignUp(userData)}
          $isDisabled={!userType}
        >
          Finalizar
        </ButtonCommon>
      </ButtonsContainerStyled>
    </>
  );

  return (
    <ModalDWCommon onClickOut={onClickOut} variant="square-medium">
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
        <StepWrapperStyled
          $isVisible={currentStep === 6}
          $isCurrent={currentStep === 6}
        >
          {stepSix()}
        </StepWrapperStyled>
      </ModalSignUpWrapperStyled>
    </ModalDWCommon>
  );
};

export default ModalSignUpComponent;
