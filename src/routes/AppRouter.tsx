import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import { useUserAuth } from '../contexts/Auth/UserAuthContext';

const AppRouter: React.FC = () => {
  const { user } = useUserAuth();

  //const user = null;

  return (
    <Router>
      {user ? (<MainRoutes/>) : (<AuthRoutes/>)}
    </Router>
  );
};

export default AppRouter;
