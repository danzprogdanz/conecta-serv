import React, { useState, useEffect } from 'react';
import {
  MainContainerStyled,
  SchedulesListRootStyled,
  SchedulesTitleStyled,
  SeparateLineStyled,
} from './styled';
import ScheduleTableComponent from '../ScheduelsSettingsTableComponent';
import ButtonCommon from '../../../../commons/ButtonCommon';

interface IProps {
  title: string;
  schedulesData?: { [key: number]: { [key: number]: boolean } };
  onUpdateSchedulesConfigs: (data: any) => void;
}

const WeeklyConfigDefaultComponent: React.FC<IProps> = ({ title, schedulesData = {}, onUpdateSchedulesConfigs }) => {
  const [localSchedulesData, setLocalSchedulesData] = useState(schedulesData);

  useEffect(() => {
    setLocalSchedulesData(schedulesData);
  }, [schedulesData]);

  const handleToggle = (dayIndex: number, hour: number) => {
    const updatedSchedules = localSchedulesData && { ...localSchedulesData };
    if (updatedSchedules && updatedSchedules[dayIndex]) {
      updatedSchedules[dayIndex][hour] = !updatedSchedules[dayIndex][hour];
      setLocalSchedulesData(updatedSchedules);
    }
  };

  return (
    <SchedulesListRootStyled>
      <SchedulesTitleStyled>{title}</SchedulesTitleStyled>
      <SeparateLineStyled />
      <MainContainerStyled>
        <ScheduleTableComponent
          data={localSchedulesData}
          onToggle={handleToggle}
        />
        <ButtonCommon onClick={() => onUpdateSchedulesConfigs(localSchedulesData)}>Salvar</ButtonCommon>
      </MainContainerStyled>
    </SchedulesListRootStyled>
  );
};

export default WeeklyConfigDefaultComponent;
