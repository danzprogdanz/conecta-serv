import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './routes/AppRouter';
import { UserAuthContextProvider } from './contexts/Auth/UserAuthContext';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <AppRouter/>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
