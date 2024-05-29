import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import LoadingSpinnerCommon from '../../commons/LoadingSpinnerCommon';

//import { useUserAuth } from '../../contexts/Auth/UserAuthContext';
import { signOutAction } from '../../services/actions/auth';
import HomePage from '../../pages/HomePage';
import NavBarComponent from '../../components/NavBarComponent';
import SchedulesPage from '../../pages/SchedulesPage';
import SettingsPage from '../../pages/SettingsPage';
import FeedbackAnalisysPage from '../../pages/FeedbackAnalisysPage';

const MainRoutes: React.FC = () => {

  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  /* const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useUserAuth();
    return user ? children : <Navigate to="/login" replace />;
  };
  */
  const handleSignOut = () => {
    setShowLoadingSpinner(true)

    setTimeout( () => {
      setShowLoadingSpinner(false)
    }, 3000)
    
    signOutAction()
  }
 
  return (
    <>
      <NavBarComponent  handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/agendamentos" element={<SchedulesPage/>} /> 
        <Route path="/configuracoes" element={<SettingsPage/>} />
        <Route path="/feedback" element={<FeedbackAnalisysPage/>} /> 
        <Route path="/*" element={<Navigate to="/"/>} />      
      </Routes>
      {showLoadingSpinner && <LoadingSpinnerCommon/>}
    </>
  );
};

export default MainRoutes;