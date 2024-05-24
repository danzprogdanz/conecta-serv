import React from 'react';
import { 
  ToastContainerRootStyled,
  ToastTitleStyled,
  ToastDescriptionStyled,
  ToastInfoContainerStyled,
  ToastIconStyled
} from './styled';

interface IProps {
  variant?: 'success' | 'error' | 'attention';
  description?: string;
}

const ToastNotificationDWCommon: React.FC<IProps> = ({ variant, description }) => {
  let titleToastNotification;
  let descriptionToastNotification;

  switch (variant) {
    case 'success':
      titleToastNotification = 'Sucesso';
      descriptionToastNotification = 'A ação foi executada com sucesso';
      break;
    case 'error':
      titleToastNotification = 'Erro';
      descriptionToastNotification = 'Houve um erro ao executar a ação, verifique as etapas e tente novamente';
      break;
    case 'attention':
      titleToastNotification = 'Atenção';
      descriptionToastNotification = 'Verifique se executou a ação corretamente';
      break;
    default:
      break;
  }

  return (
    <ToastContainerRootStyled $variant={variant}>
      <ToastIconStyled $variant={variant}/>
      <ToastInfoContainerStyled>
        <ToastTitleStyled>{titleToastNotification}</ToastTitleStyled>
        <ToastDescriptionStyled>{description? (description) : (descriptionToastNotification)}</ToastDescriptionStyled>
      </ToastInfoContainerStyled>
    </ToastContainerRootStyled>
  );
};

export default ToastNotificationDWCommon;