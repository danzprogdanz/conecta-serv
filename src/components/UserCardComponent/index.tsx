import React, { useState, useEffect } from "react";
import {
  CardSubtitleStyled,
  CardTitleStyled,
  CloseButtonStyled,
  SectionContentContainerStyled,
  SectionsButtonsWrapperStyled,
  SeparateLineStyled,
  TagWrapperStyled,
  TagsWrapperStyled,
  TopWrapperStyled,
  UserCardStyled,
} from "./styled";
import ButtonCommon from "../../commons/ButtonCommon";
import ScheduleCardComponent from "../ScheduleCardComponent";
import { start } from "repl";

interface IProps {
  onCloseCard: () => void;
  userData: any;
  onConfirmSchedule: (date: any) => void;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  hour: number | null,
  setHour: React.Dispatch<React.SetStateAction<number | null>>
}

const UserCardComponent: React.FC<IProps> = ({ 
  onCloseCard, 
  userData, 
  onConfirmSchedule,
  startDate,
  setStartDate,
  hour,
  setHour
}) => {
  useEffect(() => {
    console.log(userData, "from card");
  }, [userData]);


  const [sectionActive, setSectionActive] = useState<number>(1);

  /* const [setOriginData, setOriginData] = useState({
    createAt: Date.now(),
    /* date:  
  }) */

  return (
    <UserCardStyled>
      <TopWrapperStyled>
        <CloseButtonStyled onClick={onCloseCard}> X </CloseButtonStyled>
      </TopWrapperStyled>
      <CardTitleStyled>
        {userData?.name} {userData?.lastName}
      </CardTitleStyled>
      <CardSubtitleStyled>Tipo do serviço</CardSubtitleStyled>
      <SeparateLineStyled />
      <TagsWrapperStyled>
        {userData?.tagsList &&
          userData?.tagsList.map((el: string) => {
            return <TagWrapperStyled>{el}</TagWrapperStyled>;
          })}
      </TagsWrapperStyled>
      <SeparateLineStyled />
      <SectionsButtonsWrapperStyled>
      <ButtonCommon 
          $isActive={sectionActive === 0} 
          variant="defaultSmall"
          onClick={() => setSectionActive(0)}
        >
          Informações
        </ButtonCommon>
        <ButtonCommon 
          $isActive={sectionActive === 1} 
          variant="defaultSmall"
          onClick={() => setSectionActive(1)}
        >
          Descrição
        </ButtonCommon>
        <ButtonCommon $isActive={sectionActive === 2} variant="defaultSmall" onClick={() => setSectionActive(2)}>
          Portifólio
        </ButtonCommon>
        <ButtonCommon $isActive={sectionActive === 3} variant="defaultSmall" onClick={() => setSectionActive(3)}>
          Agendamento
        </ButtonCommon>
      </SectionsButtonsWrapperStyled>
      <SeparateLineStyled/>
      <SectionContentContainerStyled>
        {sectionActive === 1 && userData?.description}
        {/* {sectionActive === 2 && userData?.description}*/}
        {sectionActive === 3 && (
          <ScheduleCardComponent 
            schedulesData={userData.schedulesConfigs}
            onConfirmSchedule={() => onConfirmSchedule(startDate)}
            startDate={startDate} 
            setStartDate={setStartDate}
            hour={hour}
            setHour={setHour}
          />)
        }   
      </SectionContentContainerStyled>
    </UserCardStyled>
  );
};

export default UserCardComponent;
