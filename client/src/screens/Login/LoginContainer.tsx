import * as React from 'react';
import Login from './Login';


const LoginContainer = ({}) => {
  React.useEffect(() => {
    document.title = 'Login';
  });
  return (
    <Login/>
  );
};

export default LoginContainer;
