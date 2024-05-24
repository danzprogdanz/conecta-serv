import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import LoadingSpinnerCommon from '../../commons/LoadingSpinnerCommon';

//import { useUserAuth } from '../../contexts/Auth/UserAuthContext';
//import { signOutAction } from '../../services/actions/auth';
import HomePage from '../../pages/HomeDWPage';
import NavBarComponent from '../../components/NavBarComponent';

const MainRoutes: React.FC = () => {

  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  /* const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useUserAuth();
    return user ? children : <Navigate to="/login" replace />;
  };

  const handleSignOut = () => {
    setShowLoadingSpinner(true)

    setTimeout( () => {
      setShowLoadingSpinner(false)
    }, 3000)
    
    signOutAction()
  }
 */
  return (
    <>
      <NavBarComponent  handleSignOut={() => {}/* handleSignOut */} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} /> 
      </Routes>
      {showLoadingSpinner && <LoadingSpinnerCommon/>}
    </>
  );
};

export default MainRoutes;