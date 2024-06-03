import React, { useState, useEffect } from 'react';
import { SchedulesConfig } from '../../../../interfaces/auth';
import { TableWrapperStyled, TableStyled, TBodyStyled, THeadStyled, ToggleButtonStyled } from './styled';

interface ScheduleTableProps {
  data: SchedulesConfig | undefined;
  onToggle: (dayIndex: number, hour: number) => void;
}

const ScheduleTableComponent: React.FC<ScheduleTableProps> = ({ data, onToggle }) => {
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
          {data && Array.from({ length: 24 }, (_, hour) => (
            <tr key={hour}>
              <td>{hour}:00  |-|  {hour + 1}:00</td>
              {daysOfWeek.map((_, dayIndex) => (
                <td key={dayIndex} style={{ textAlign: 'center' }} onClick={() => onToggle(dayIndex, hour)}>
                  {data?.[dayIndex]?.[hour] ? <ToggleButtonStyled>✔️</ToggleButtonStyled> : <ToggleButtonStyled>❌</ToggleButtonStyled>}
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
