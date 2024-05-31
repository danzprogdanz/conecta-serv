import React, { useState, useEffect, forwardRef } from "react";
import {
  ButtonWrapperStyled,
  MainContainerStyled,
  SchedulesListRootStyled,
  SchedulesTitleStyled,
  SeparateLineStyled,
} from "./styled";
import ReactDatePicker from "react-datepicker";
import ScheduelsSettingsExecptionTableComponent from "../ScheduelsSettingsExecptionTableComponent";
import { scheduleConfigsExceptionModel } from "../../../../models/schedulesSettings";
import ButtonCommon from "../../../../commons/ButtonCommon";

interface IProps {
  title: string;
  schedulesData?: any[];
}

interface CustomDatePickerInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomDatePickerInput = forwardRef<HTMLButtonElement, CustomDatePickerInputProps>(
  ({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  )
);

// Add displayName to the forwarded component for better debugging
CustomDatePickerInput.displayName = 'CustomDatePickerInput';

const ExecptionDateConfigComponent: React.FC<IProps> = ({title, schedulesData}) => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <SchedulesListRootStyled>
      <SchedulesTitleStyled>{title}</SchedulesTitleStyled>
      <SeparateLineStyled/>
      <MainContainerStyled>
        <ButtonWrapperStyled>
          <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              customInput={<CustomDatePickerInput />}
            />
        </ButtonWrapperStyled>
        <SeparateLineStyled/>
        <ScheduelsSettingsExecptionTableComponent
          data={scheduleConfigsExceptionModel}
        />
        <ButtonCommon>Salvar</ButtonCommon>
      </MainContainerStyled>
    </SchedulesListRootStyled>
  );
};

export default ExecptionDateConfigComponent;
