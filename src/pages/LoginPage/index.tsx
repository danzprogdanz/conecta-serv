import React, { ReactNode, useState, useEffect } from "react";
import {
  LoginFormContainerStyled,
  TitleContainerStyled,
  LoginFormCardStyled,
  SignUpOpenModalButtonStyled,
  InputsWrapperStyled,
  LoginPageLayoutStyled,
  LogoContainerStyled,
  LogoTitleStyled,
  LogoSubtitleStyled,
  DescriptionStyled,
} from "./styled";

import TitleDWCommon from "../../commons/TitleDWCommon";
import InputDWCommon from "../../commons/InputCommon";
import ButtonDWCommon from "../../commons/ButtonCommon";
import ToastNotificationDWCommon from "../../commons/ToastNotificationDWCommon";

import LoadingSpinnerDWCommon from "../../commons/LoadingSpinnerCommon";
import ModalSignUpDWComponent from "../../components/ModalSignUpComponent";
import { signInAction, signUpAction } from "../../services/actions/auth";
import { IUserData } from "../../interfaces/auth";
//import { signInAction, signUpAction } from '../../services/actions/auth';

interface IErrorObject {
  type: string;
  fields: string[];
}

interface IProps {
  children?: ReactNode;
}

const LoginPage: React.FC<IProps> = ({ children }) => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToastNotification, setShowToastNotification] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  const [signInErrorNotification, setSignInErrorNotification] = useState(false);
  const [signUpErrorNotification, setSignUpErrorNotification] = useState(false);
  const [signUpSuccessNotification, setSignUpSuccessNotification] =
    useState(false);
  const [signInEmail, setSignInEmail] = useState<string | null>(null);
  const [signInPassword, setSignInPassword] = useState<string | null>(null);
  const [signUpEmail, setSignUpEmail] = useState<string | null>(null);
  const [signUpPassword, setSignUpPassword] = useState<string | null>(null);
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState<
    string | null
  >(null);

  const [inputRequiredErrorList, setInputRequiredErrorList] =
    useState<IErrorObject | null>(null);

  useEffect(() => {
    if (isSendingEmail) {
      const timeoutId = setTimeout(() => {
        setIsSendingEmail(false);
        setShowToastNotification(true);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSendingEmail]);

  useEffect(() => {
    if (showToastNotification) {
      const timeoutId = setTimeout(() => {
        setShowToastNotification(false);
        setShowModal(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showToastNotification]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleSignUp = async (userInfoData: IUserData) => {
    setShowLoadingSpinner(true);

    setTimeout(async () => {
      setShowLoadingSpinner(false);

      const missingFields = [];

      if (!userInfoData.signUpEmail) {
        missingFields.push("signUpEmail");
      }
      if (!userInfoData.signUpPassword) {
        missingFields.push("signUpPassword");
      }
      if (!userInfoData.signUpConfirmPassword) {
        missingFields.push("signUpConfirmPassword");
      }

      if (missingFields.length > 0) {
        setInputRequiredErrorList({
          type: "requiredField",
          fields: missingFields,
        });
        return;
      }

      if (userInfoData.signUpPassword !== userInfoData.signUpConfirmPassword) {
        console.log("senhas diferentes");
        setInputRequiredErrorList({
          type: "differentPasswords",
          fields: ["signUpConfirmPassword"],
        });
      } else {
        try {
          if (userInfoData.signUpEmail !== null && userInfoData.signUpPassword !== null) {
            await signUpAction(
              userInfoData.signUpEmail as string,
              userInfoData.signUpPassword as string,
              userInfoData as IUserData
            );
            setSignUpSuccessNotification(true);
            setShowSignUpModal(false);
            setTimeout(() => {
              setSignUpSuccessNotification(false);
            }, 2000);
          } else {
            // Handle the case where signUpEmail or signUpPassword is null
          }
        } catch (error) {
          if (error && typeof error === "object" && "code" in error) {
            switch ((error as { code: string }).code) {
              case "auth/email-already-in-use":
                setSignUpErrorNotification(true);
                setTimeout(() => {
                  setSignUpErrorNotification(false);
                }, 3000);
                break;
              default:
                break;
            }
          } else {
            console.log("General Error:", error);
          }
        }
      }
    }, 2000);

    setShowSignUpModal(false)
  };

  const handleSignIn = async () => {
    setShowLoadingSpinner(true);

    setTimeout(async () => {
      setShowLoadingSpinner(false);

      try {
        if (signInEmail && signInPassword) {
          if (signInEmail !== "" && signInPassword !== "") {
            await signInAction(signInEmail, signInPassword);
          } else {
            ///
          }
        } else {
          setInputRequiredErrorList({
            type: "requiredField",
            fields: ["signInEmail", "signInPassword"],
          });
        }
      } catch (error) {
        //console.log((error as { code: string }).code)
        if (error && typeof error === "object" && "code" in error) {
          switch ((error as { code: string }).code) {
            case "auth/invalid-email":
              console.log("auth/invalid-email");
              setInputRequiredErrorList({
                type: "invalidEmail",
                fields: ["signInEmail"],
              });
              break;
            case "auth/invalid-login-credentials":
              setSignInErrorNotification(true);
              setTimeout(() => {
                setSignInErrorNotification(false);
              }, 2000);
              break;
            default:
              break;
          }
        } else {
          console.log("General Error:", error);
          // Handle other non-Firebase errors here
        }
        setSignInErrorNotification(true);
        setTimeout(() => {
          setSignInErrorNotification(false);
        }, 2000);
      }
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "signInEmail":
        setSignInEmail(value);
        break;
      case "signInPassword":
        setSignInPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <LoginPageLayoutStyled>
        <LogoContainerStyled>
          <LogoTitleStyled>Conecta Serv</LogoTitleStyled>
          <LogoSubtitleStyled>Fortal</LogoSubtitleStyled>
          <DescriptionStyled>
            Conectando profissionais a clientes
          </DescriptionStyled>
        </LogoContainerStyled>
        <LoginFormContainerStyled>
          <LoginFormCardStyled>
            <TitleContainerStyled>
              <TitleDWCommon>Insira suas</TitleDWCommon>
              <TitleDWCommon>credenciais de acesso</TitleDWCommon>
            </TitleContainerStyled>
            <InputsWrapperStyled>
              <InputDWCommon
                name="signInEmail"
                label="Email ou usuário"
                placeholder="testando@gmail.com"
                type="text"
                onChange={handleChange}
                inputRequiredErrorList={inputRequiredErrorList}
              />
              <InputDWCommon
                name="signInPassword"
                label="Senha"
                placeholder="Insira sua senha"
                type="password"
                onChange={handleChange}
                inputRequiredErrorList={inputRequiredErrorList}
              />
            </InputsWrapperStyled>
            <ButtonDWCommon onClick={handleSignIn}>Acessar</ButtonDWCommon>
          </LoginFormCardStyled>
          <SignUpOpenModalButtonStyled onClick={handleOpenSignUpModal}>
            Cadastre-se
          </SignUpOpenModalButtonStyled>
        </LoginFormContainerStyled>
        {showSignUpModal && (
          <ModalSignUpDWComponent
            onCancel={handleOpenSignUpModal}
            onSignUp={handleSignUp}
            inputRequiredErrorList={inputRequiredErrorList}
            onClickOut={() => setShowSignUpModal(false)}
          />
        )}
        {showLoadingSpinner && <LoadingSpinnerDWCommon />}
        {isSendingEmail && <LoadingSpinnerDWCommon />}
        {showToastNotification && (
          <ToastNotificationDWCommon variant="success" />
        )}
        {signInErrorNotification && (
          <ToastNotificationDWCommon
            variant="error"
            description="Email ou senha incorreta"
          />
        )}
        {signUpErrorNotification && (
          <ToastNotificationDWCommon
            variant="error"
            description="Usuário já cadastrado"
          />
        )}
        {children}
      </LoginPageLayoutStyled>
    </>
  );
};

export default LoginPage;
