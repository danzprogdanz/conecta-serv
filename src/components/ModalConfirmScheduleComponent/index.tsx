import React, { useEffect, useState } from 'react';
import ModalCommon from '../../commons/ModalCommon';
import ButtonCommon from '../../commons/ButtonCommon';
import { 
  ButtonsContainerStyled, 
  LeftDivContainerStyled, 
  MainContentContainerStyled, 
  ModalConfirmDeleteRootStyled, 
  RightDivContainerStyled, 
  SeparateLineStyled, 
  SubTitleModalStyled,
  TitleWrapperStyled,
  TuplaInfoStyled,
} from './styled';
import TitleCommon from '../../commons/TitleCommon';
import TextBoxCommon from '../../commons/TextBoxCommon';

interface IProps {
 /*  children?: React.ReactNode;
  onConfirmDelete: () => void;
   */
  onCancel: () => void;
  onClickOut: () => void;
  userData: any;
  onConfirmSchedule: (message: string) => void;
  startDate: Date;
  hour: number | null;
}

const ModalConfirmScheduleComponent: React.FC<IProps> = (
  { /* children, onConfirmDelete,  */ 
    onCancel, 
    onClickOut, 
    userData,
    onConfirmSchedule,
    startDate,
    hour
  }
) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const formattedDate = startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });

  const handleConfirmSchedule = () => {
    onConfirmSchedule(message);
  };

  return (
    <>
      <ModalCommon variant="square-medium" onClickOut={onClickOut}>
        <ModalConfirmDeleteRootStyled>
          <TitleWrapperStyled>
            <TitleCommon tag="h3" variant="modal">Deseja confirmar o agendamento?</TitleCommon>
            <SeparateLineStyled/>
          </TitleWrapperStyled>
          <MainContentContainerStyled>
            <LeftDivContainerStyled>
              <TuplaInfoStyled>
                <p>Data:</p><p>{formattedDate}</p>
              </TuplaInfoStyled>
              <TuplaInfoStyled>
                <p>Horário:</p><p>{hour ? (`${hour}:00 |-| ${hour + 1}:00`) : undefined}</p>
              </TuplaInfoStyled>
              <TuplaInfoStyled>
                <p>Nome:</p><p>{userData.name}</p>
              </TuplaInfoStyled>
              <TuplaInfoStyled>
                <p>Número do telefone:</p><p>{userData.cellNumber}</p>
              </TuplaInfoStyled>
              
            </LeftDivContainerStyled>
            <RightDivContainerStyled>
            <TextBoxCommon 
              label='Mande uma menssagem'
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} 
            />
            </RightDivContainerStyled>
          </MainContentContainerStyled>
          <ButtonsContainerStyled>
            <ButtonCommon variant='outline' onClick={onCancel} >Cancelar</ButtonCommon>
            <ButtonCommon onClick={handleConfirmSchedule}>Confirmar</ButtonCommon>
          </ButtonsContainerStyled>
          {/* {children} */}
        </ModalConfirmDeleteRootStyled>
      </ModalCommon>
    </>
  );
};

export default ModalConfirmScheduleComponent;