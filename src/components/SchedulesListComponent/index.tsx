import React, { useState, useEffect } from "react";
import {
  MainContainerStyled,
  ScheduleDisplayStyled,
  ScheduleElementButtonStyled,
  ScheduleElementTextStyled,
  SchedulesListRootStyled,
  SchedulesListStyled,
  SchedulesTitleStyled,
  SeparateLineStyled,
} from "./styled";

interface IProps {
  title: string;
  schedulesData?: any[];
}

const SchedulesListComponent: React.FC<IProps> = ({title, schedulesData}) => {

  return (
    <SchedulesListRootStyled>
      <SchedulesTitleStyled>{title}</SchedulesTitleStyled>
      <SeparateLineStyled/>
      <MainContainerStyled>
        <SchedulesListStyled>
          {schedulesData?.map((el) => {
            return (
              <ScheduleElementButtonStyled>
                <ScheduleElementTextStyled>{el.date}</ScheduleElementTextStyled>
                <ScheduleElementTextStyled>{el.startHour}</ScheduleElementTextStyled>
                <ScheduleElementTextStyled>{el.userId}</ScheduleElementTextStyled>
              </ScheduleElementButtonStyled>)
          })}
        </SchedulesListStyled>
        <ScheduleDisplayStyled></ScheduleDisplayStyled>
      </MainContainerStyled>
    </SchedulesListRootStyled>
  );
};

export default SchedulesListComponent;
