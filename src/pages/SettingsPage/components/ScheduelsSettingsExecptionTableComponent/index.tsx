import React from 'react';
import { TBodyStyled, THeadStyled, TableStyled, TableWrapperStyled } from './styled';

// Define interface for the exception model
interface ExceptionModel {
  Timestamp: number;
  Settings: { [key: string]: boolean };
}

// Define the props interface
interface ScheduleTableProps {
  data: ExceptionModel[];
}

const SchedulesSettingsExceptionTableComponent: React.FC<ScheduleTableProps> = ({ data }) => {
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  return (
    <TableWrapperStyled>
      {data.map((exception, index) => (
        <TableStyled key={index}>
          <THeadStyled>
            <tr>
              <th>Hour</th>
              <th>{daysOfWeek[new Date(exception.Timestamp * 1000).getDay()]}</th>
            </tr>
          </THeadStyled>
          <TBodyStyled>
            {Object.entries(exception.Settings).map(([hour, isEnabled]) => (
              <tr key={hour}>
                <td>{hour}:00 - {parseInt(hour) + 1}:00</td>
                <td>{isEnabled ? '✔️' : '❌'}</td>
              </tr>
            ))}
          </TBodyStyled>
        </TableStyled>
      ))}
    </TableWrapperStyled>
  );
};

export default SchedulesSettingsExceptionTableComponent;
