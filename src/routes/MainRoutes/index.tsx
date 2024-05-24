import React, { useState } from 'react';
/* import {Routes, Route, Navigate} from 'react-router-dom';

import NavBarDWComponent from '../../components/NavBarDWComponent';
import LoadingSpinnerCommon from '../../commons/LoadingSpinnerCommon';

//import { useUserAuth } from '../../contexts/Auth/UserAuthContext';
//import { signOutAction } from '../../services/actions/auth';
import HomeDWPage from '../../pages/HomeDWPage'; */

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
      {/* <NavBarDWComponent /* handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeDWPage />} /> 
      </Routes>
      {showLoadingSpinner && <LoadingSpinnerCommon/>} */}
    </>
  );
};

export default MainRoutes;