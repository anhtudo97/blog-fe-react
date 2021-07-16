import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RegisterContainer,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterLoginButton,
  ErrorMessage,
} from './styled';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <RegisterContainer>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <label>Username</label>
        <RegisterInput
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <RegisterInput
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
      <RegisterLoginButton className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </RegisterLoginButton>
      {error && <ErrorMessage>Something went wrong!</ErrorMessage>}
    </RegisterContainer>
  );
};
