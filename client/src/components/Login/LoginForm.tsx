import {useFormik} from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import usersAPI from '../../api/users.api';
import {useCookies} from 'react-cookie';
import {getUser} from '../../redux/reducers/usersReducer';
import {useDispatch} from 'react-redux';

const LoginForm = ({}) => {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const result = await usersAPI.login({
        username: values.username,
        password: values.password,
      });
      setCookie('token', result.access_token);
      await dispatch(getUser(cookies.token));
    },
  });
  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="email">Username</InputLabel>
      <LoginInput
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <InputLabel htmlFor="password">Password</InputLabel>
      <LoginInput
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <LoginButton type="submit">Login</LoginButton>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
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

const LoginInput = styled.input`
  outline: none;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 10px 90px 10px 10px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
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

export default LoginForm;
