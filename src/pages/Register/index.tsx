import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import { useAppSelector } from '../../app/hooks';
import {
  RegisterContainer,
  RegisterForm,
  RegisterInput,
  RegisterOptionWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from './styled';

export const Register = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const isFetching = useAppSelector((state) => state.root.isFetching);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', {
        username: userRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      res.data && window.location.replace('/login');
    } catch (err: any) {
      console.log(err);
    }
  };

  const dontRegister =
    emailRef.current?.value === '' ||
    userRef.current?.value === '' ||
    passwordRef.current?.value === '';

  return (
    <motion.section exit={{ opacity: 0 }}>
      <RegisterContainer>
        <RegisterWrapper>
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Register a new account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <RegisterForm action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <RegisterFormWrapper>
              <div className="mb-8">
                <label className="my-1 font-semibold text-center text-gray-700">
                  Email address
                </label>
                <RegisterInput
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div className="mb-8">
                <label className="my-1 font-semibold text-center text-gray-700">
                  Username
                </label>
                <RegisterInput
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Username"
                  ref={userRef}
                />
              </div>
              <div className="mb-8">
                <label className="my-1 font-semibold text-center text-gray-700">
                  Password
                </label>
                <RegisterInput
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </RegisterFormWrapper>
            <RegisterOptionWrapper>
              If you have a account!{' '}
              <Link to="/login" className="text-center">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </a>
              </Link>
            </RegisterOptionWrapper>
            <button
              disabled={isFetching || dontRegister}
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {dontRegister && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              Register
            </button>
          </RegisterForm>
        </RegisterWrapper>
      </RegisterContainer>
    </motion.section>
  );
};
