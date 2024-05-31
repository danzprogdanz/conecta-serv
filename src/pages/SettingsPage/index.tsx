import React, { useEffect, useState } from "react";
import { SettingsPageLayoutStyled } from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import WeeklyConfigDefaultComponent from "./components/WeeklyConfigDefaultComponent";
import ExecptionDateConfigComponent from "./components/ExecptionDateConfigComponent";

const SettingsPage: React.FC = () => {

  
  return (
    <PageLayoutRootStyled>
      <SettingsPageLayoutStyled>
        <WeeklyConfigDefaultComponent
          title='Disponibilidade de Horários semanais'
        />
        <ExecptionDateConfigComponent
          title='Data atípica'
        />
      </SettingsPageLayoutStyled>
    </PageLayoutRootStyled>
  );
};

export default SettingsPage;