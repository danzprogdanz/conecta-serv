import React, { forwardRef, useEffect, useState } from "react";
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
  schedulesData: { [key: number]: { [key: number]: boolean } };
  onConfirmSchedule: () => void;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  hour: number | null;
  setHour: React.Dispatch<React.SetStateAction<number | null>>;
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

const ScheduleCardComponent: React.FC<IProps> = (
  { 
    schedulesData, 
    onConfirmSchedule,
    startDate,
    setStartDate, 
    hour,
    setHour
  }
) => {

  useEffect(() => {
    console.log('type of start date', typeof startDate);
  }, [startDate]);

  const getAvailableHoursForDay = (date: Date) => {
    const dayIndex = date.getDay(); // Get the day index (0 for Sunday, 1 for Monday, etc.)
    const hoursData = schedulesData[dayIndex];
    // Filter hoursData to only keep hours that are true
    return Object.keys(hoursData)
      .filter(hour => hoursData[parseInt(hour)])
      .map(hour => parseInt(hour));
  };

  const availableHours = getAvailableHoursForDay(startDate);

  const handleConfirmHour = (selectedHour: number) => {
    setHour(selectedHour);
    onConfirmSchedule();
  };

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
          Horários disponíveis
          <SeparateLineStyled />
          <SchedulesElementsWrapperStyled>
            {availableHours.length > 0 ? (
              availableHours.map(hour => (
                <ButtonCommon 
                  key={hour} 
                  variant="defaultSmall"
                  onClick={() => handleConfirmHour(hour)}
                >
                  {`${hour}:00 |-| ${hour + 1}:00`}
                </ButtonCommon>
              ))
            ) : (
              <p>Sem horários disponíveis</p>
            )}
          </SchedulesElementsWrapperStyled>
        </SchedulesPickerBoardStyled>
      </ScheduleContentWrapperStyled>
    </ScheduleCardRootStyled>
  );
};

export default ScheduleCardComponent;
