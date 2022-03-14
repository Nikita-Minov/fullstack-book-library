import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './screens/Main/MainContainer';
import RegisterContainer from './screens/Register/RegisterContainer';
import LoginContainer from './screens/Login/LoginContainer';


const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/register" element={<RegisterContainer/>} />
        <Route path="/login" element={<LoginContainer/>} />
      </Routes>
    </div>
  );
};


export default App;
