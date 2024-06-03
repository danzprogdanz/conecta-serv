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

interface IProps {
  onCloseCard: () => void;
  userData: any;
}

const UserCardComponent: React.FC<IProps> = ({ onCloseCard, userData }) => {
  useEffect(() => {
    console.log(userData, "from card");
  }, [userData]);

  const [sectionActive, setSectionActive] = useState<number>(1);

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
        {sectionActive === 3 && (<ScheduleCardComponent schedulesData={userData.schedulesConfigs}/>)}   
      </SectionContentContainerStyled>
    </UserCardStyled>
  );
};

export default UserCardComponent;
