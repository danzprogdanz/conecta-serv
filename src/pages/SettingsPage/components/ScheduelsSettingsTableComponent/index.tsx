import React from 'react';
import { SchedulesConfig } from '../../../../interfaces/auth';
import { TableWrapperStyled, TableStyled, TBodyStyled, THeadStyled } from './styled';

interface ScheduleTableProps {
  data: SchedulesConfig;
}

const ScheduleTableComponent: React.FC<ScheduleTableProps> = ({ data }) => {
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  return (
    <TableWrapperStyled>
      <TableStyled>
        <THeadStyled>
          <tr>
            <th>Hour</th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </THeadStyled>
        <TBodyStyled>
          {Array.from({ length: 24 }, (_, hour) => (
            <tr key={hour}>
              <td>{hour}:00  |-|  {hour + 1}:00</td>
              {daysOfWeek.map((_, dayIndex) => (
                <td key={dayIndex} style={{ textAlign: 'center' }}>
                  {data[dayIndex][hour] ? '✔️' : '❌'}
                </td>
              ))}
            </tr>
          ))}
        </TBodyStyled>
      </TableStyled>
    </TableWrapperStyled>
  );
};

export default ScheduleTableComponent;
