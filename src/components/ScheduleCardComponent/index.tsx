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

const ScheduleCardComponent: React.FC<IProps> = ({ schedulesData }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(startDate);
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
                <ButtonCommon key={hour} variant="defaultSmall">
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
