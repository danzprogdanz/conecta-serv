import React, { useState } from 'react';
import ModalCommon from '../../commons/ModalCommon';
import ButtonCommon from '../../commons/ButtonCommon';
import { 
  ButtonsContainerStyled, 
  ModalConfirmDeleteRootStyled, 
  SeparateLineStyled, 
  SubTitleModalStyled,
  TitleWrapperStyled,
} from './styled';
import TitleCommon from '../../commons/TitleCommon';

interface IProps {
 /*  children?: React.ReactNode;
  onConfirmDelete: () => void;
  onCancel: () => void;
  onClickOut: () => void; */
}

const ModalConfirmScheduleComponent: React.FC<IProps> = ({ /* children, onConfirmDelete, onCancel, onClickOut */ }) => {

  return (
    <>
      <ModalCommon variant="square-medium" onClickOut={() => {}/* onClickOut */}>
        <ModalConfirmDeleteRootStyled>
          <TitleWrapperStyled>
            <TitleCommon tag="h3" variant="modal">Reiniciar configurações de dispositivo</TitleCommon>
            <SeparateLineStyled/>
          </TitleWrapperStyled>
          <SubTitleModalStyled>Deseja voltar para a configuração padrão?</SubTitleModalStyled>
          <p>Ao resetar, você perderá a todas as configurações do dispositivo selecionado.</p>
          <ButtonsContainerStyled>
            <ButtonCommon variant='outline' onClick={() => {}/* onCancel */} >Cancelar</ButtonCommon>
            <ButtonCommon variant='warning' onClick={() => {}/* onConfirmDelete */} >Reiniciar</ButtonCommon>
          </ButtonsContainerStyled>
          {/* {children} */}
        </ModalConfirmDeleteRootStyled>
      </ModalCommon>
    </>
  );
};

export default ModalConfirmScheduleComponent;