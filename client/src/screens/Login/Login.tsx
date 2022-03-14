import * as React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/Login/LoginForm';

export const Login = ({}) => {
  return (
    <Wrapper>
      <LoginTitle>
        LOGIN
      </LoginTitle>
      <LoginForm/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-bottom: 40px;
`;

export default Login;
