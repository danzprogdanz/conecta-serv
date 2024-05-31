import React, { useState, useEffect } from "react";
import {
  MainContainerStyled,
  SchedulesListRootStyled,
  SchedulesTitleStyled,
  SeparateLineStyled,
} from "./styled";
import ScheduleTableComponent from "../ScheduelsSettingsTableComponent";
import { schedulesConfigsDefault } from "../../../../models/schedulesSettings";
import ButtonCommon from "../../../../commons/ButtonCommon";

interface IProps {
  title: string;
  schedulesData?: any[];
}

const WeeklyConfigDefaultComponent: React.FC<IProps> = ({title, schedulesData}) => {

  return (
    <SchedulesListRootStyled>
      <SchedulesTitleStyled>{title}</SchedulesTitleStyled>
      <SeparateLineStyled/>
      <MainContainerStyled>
        <ScheduleTableComponent
          data={schedulesConfigsDefault}
        />
        <ButtonCommon>Salvar</ButtonCommon>
      </MainContainerStyled>
    </SchedulesListRootStyled>
  );
};

export default WeeklyConfigDefaultComponent;
