import React, { useEffect, useState } from "react";
import {
  SchedulesPageLayoutStyled
} from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import SchedulesListComponent from "../../components/SchedulesListComponent";
import { userSchedulesModel } from "../../models/userSchedules";

const SchedulesPage: React.FC = () => {

  
  return (
    <PageLayoutRootStyled>
      <SchedulesPageLayoutStyled>
        <SchedulesListComponent
          title='Criados por mim'
          schedulesData={userSchedulesModel.SchedulesCreateByMe}
        />
        <SchedulesListComponent
          title='Criados por outros'
          schedulesData={userSchedulesModel.SchedulesCreateByOthers}
        />
      </SchedulesPageLayoutStyled>
    </PageLayoutRootStyled>
  );
};

export default SchedulesPage;