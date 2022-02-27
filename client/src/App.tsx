import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './screens/Main/MainContainer';


const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
      </Routes>
    </div>
  );
};


export default App;
