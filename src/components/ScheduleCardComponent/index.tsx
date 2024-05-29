import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  ScheduleCardRootStyled,
  ScheduleContentWrapperStyled,
  SchedulesElementsWrapperStyled,
  SchedulesPickerBoardStyled,
  SeparateLineStyled,
} from "./styled";
import ButtonCommon from "../../commons/ButtonCommon";

interface IProps {

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

const ScheduleCardComponent: React.FC<IProps> = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <ScheduleCardRootStyled>
      <ScheduleContentWrapperStyled>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          customInput={<CustomDatePickerInput />}
        />
        <SchedulesPickerBoardStyled>
          Agenda
          <SeparateLineStyled/>
          <SchedulesElementsWrapperStyled>
            <ButtonCommon
              //$isDisabled={true}
              variant="disabled"
            >9:00 |-| 10:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >10:00 |-| 11:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >9:00 |-| 10:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >10:00 |-| 11:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >9:00 |-| 10:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >10:00 |-| 11:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >9:00 |-| 10:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >10:00 |-| 11:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >9:00 |-| 10:00</ButtonCommon>
            <ButtonCommon
              variant="defaultSmall"
            >10:00 |-| 11:00</ButtonCommon>
          </SchedulesElementsWrapperStyled>
        </SchedulesPickerBoardStyled>
      </ScheduleContentWrapperStyled>
      
      {/* <ButtonCommon>Agendar</ButtonCommon> */}
    </ScheduleCardRootStyled>
  );
};

export default ScheduleCardComponent;
