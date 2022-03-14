import {useFormik} from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import usersAPI from '../../api/users.api';

const RegisterForm = ({}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    onSubmit: async (values) => {
      await usersAPI.register({
        username: values.username,
        email: values.email,
        password: values.password,
      });
    },
  });
  return (
    <RegisterFormWrapper onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <RegisterInput
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <InputLabel htmlFor="email">Email</InputLabel>
      <RegisterInput
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputLabel htmlFor="password">Password</InputLabel>
      <RegisterInput
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <RegisterButton type="submit">Submit</RegisterButton>
    </RegisterFormWrapper>
  );
};

const RegisterFormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
`;

const RegisterInput = styled.input`
  outline: none;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 10px 90px 10px 10px;
  margin-bottom: 20px;
`;

const RegisterButton = styled.button`
  padding: 10px 30px;
  outline: none;
  border: 1px solid #000000;
  border-radius: 20px;
  background-color: #000000;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export default RegisterForm;
