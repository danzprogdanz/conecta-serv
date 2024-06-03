import React, { useEffect, useState } from "react";
import { SettingsPageLayoutStyled } from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import WeeklyConfigDefaultComponent from "./components/WeeklyConfigDefaultComponent";
import ExecptionDateConfigComponent from "./components/ExecptionDateConfigComponent";
import { useUserAuth } from "../../contexts/Auth/UserAuthContext";
import { userUpdateSchedulesConfigAccess, usersGetByDeviceIdAccess } from "../../services/dataAccess/userAcess";

const SettingsPage: React.FC = () => {
  const { user } = useUserAuth();

  const [schedulesConfigs, setSchedulesConfigs] = useState<any>(null);

  useEffect(() => {
    console.log('user-uid', user?.uid);

    if (user?.uid) {
      usersGetByDeviceIdAccess(user.uid)
        .then(result => {
          setSchedulesConfigs(result.schedulesConfigs);
        });
    }
  }, [user]);

  useEffect(() => {
    console.log('schedulesConfigs', schedulesConfigs);
  }, [schedulesConfigs]);

  const handleUpdateSchedulesConfigs = (data: any) => {
    if(user?.uid) {
      userUpdateSchedulesConfigAccess(user.uid, data)

    }
  }

  return (
    <PageLayoutRootStyled>
      <SettingsPageLayoutStyled>
        <WeeklyConfigDefaultComponent
          title='Disponibilidade de Horários semanais'
          schedulesData={schedulesConfigs}
          onUpdateSchedulesConfigs={handleUpdateSchedulesConfigs}
        />
        {/* <ExecptionDateConfigComponent
          title='Data atípica'
        /> */}
      </SettingsPageLayoutStyled>
    </PageLayoutRootStyled>
  );
};

export default SettingsPage;
