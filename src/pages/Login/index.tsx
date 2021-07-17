import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { loginSuccess, loginFailure, loginStart } from '../../app/slice';
import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginRegisterButton,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { api } from '../../api';

export const Login = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((state) => state.root.isFetching);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await api.post('/auth/login', {
        username: userRef.current?.value,
        password: passwordRef.current?.value,
      });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <label>Username</label>
        <LoginInput
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <LoginInput
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <LoginButton type="submit" disabled={isFetching}>
          Login
        </LoginButton>
      </LoginForm>
      <LoginRegisterButton>
        <Link className="link" to="/register">
          Register
        </Link>
      </LoginRegisterButton>
    </LoginContainer>
  );
};
