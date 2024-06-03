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
import { CardTitleStyled } from "../UserCardComponent/styled";

interface IProps {
  title: string;
  schedulesData?: any[];
}

const SchedulesListComponent: React.FC<IProps> = ({ title, schedulesData }) => {
  const [selectedSchedule, setSelectedSchedule] = useState<any | null>(null);

  const handleScheduleClick = (schedule: any) => {
    setSelectedSchedule(schedule);
  };

  useEffect(() => {
    console.log(schedulesData)
  }, [])

  return (
    <SchedulesListRootStyled>
      <SchedulesTitleStyled>{title}</SchedulesTitleStyled>
      <SeparateLineStyled />
      <MainContainerStyled>
        <SchedulesListStyled>
          {schedulesData?.map((el, index) => (
            <ScheduleElementButtonStyled key={index} onClick={() => handleScheduleClick(el)}>
              <ScheduleElementTextStyled>{el.date}</ScheduleElementTextStyled>
              <ScheduleElementTextStyled>{`${el.startHour}:00 hrs  ->  ${el.startHour + 1}:00 hrs`}</ScheduleElementTextStyled>
            </ScheduleElementButtonStyled>
          ))}
        </SchedulesListStyled>
        <ScheduleDisplayStyled>
          {selectedSchedule && (
            <div>
              <CardTitleStyled>{selectedSchedule.date}</CardTitleStyled>
              <p>{selectedSchedule.startHour ? (`${selectedSchedule.startHour}:00 hrs  até  ${selectedSchedule.startHour + 1}:00 hrs`) : undefined}</p>
              <p>Menssagem: {selectedSchedule.message}</p>
            </div>
          )}
        </ScheduleDisplayStyled>
      </MainContainerStyled>
    </SchedulesListRootStyled>
  );
};

export default SchedulesListComponent;
