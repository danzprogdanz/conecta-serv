import React, { useEffect, useState } from "react";
import {
  SchedulesPageLayoutStyled
} from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import SchedulesListComponent from "../../components/SchedulesListComponent";
import { userSchedulesModel } from "../../models/userSchedules";
import { useUserAuth } from "../../contexts/Auth/UserAuthContext";
import { usersGetByDeviceIdAccess } from "../../services/dataAccess/userAcess";

const SchedulesPage: React.FC = () => {
  const [currentUserData, setCurrentUserData] = useState<any>(null)
  const { user } = useUserAuth();

  useEffect(() => {
    if(user && user.uid) {
      usersGetByDeviceIdAccess(user.uid)
        .then((result) => {setCurrentUserData(result)})
    }
  }, [])

  return (
    <PageLayoutRootStyled>
      <SchedulesPageLayoutStyled>
        <SchedulesListComponent 
          title='Criados por mim'
          schedulesData={currentUserData?.userSchedules.SchedulesCreateByMe}
        />
        <SchedulesListComponent
          title='Criados por outros'
          schedulesData={currentUserData?.userSchedules.SchedulesCreateByOthers}
        />
      </SchedulesPageLayoutStyled>
    </PageLayoutRootStyled>
  );
};

export default SchedulesPage;