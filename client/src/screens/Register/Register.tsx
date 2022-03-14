import * as React from 'react';
import styled from 'styled-components';
import RegisterForm from '../../components/Register/RegisterForm';

export const Register = ({}) => {
  React.useEffect(() => {
    document.title = 'Register';
  });
  return (
    <Wrapper>
      <RegisterTitle>
        REGISTRATION
      </RegisterTitle>
      <RegisterForm/>
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

const RegisterTitle = styled.h1`
  font-size: 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-bottom: 40px;
`;

export default Register;
