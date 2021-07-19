import React, { useRef } from 'react';
import { loginSuccess, loginFailure, loginStart } from '../../app/slice';
import {
  LoginContainer,
  LoginForm,
  LoginInputUsername,
  LoginInputPassword,
  LoginOptionWrapper,
  LoginFormWrapper,
  LoginWrapper,
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

  const dontSignIn =
    userRef.current?.value === '' || passwordRef.current?.value === '';

  return (
    <LoginContainer>
      <LoginWrapper>
        <div>
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
          
        </div>
        <LoginForm action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <LoginFormWrapper>
            <div className="mb-8">
              <label className="my-1 font-semibold text-center text-gray-700">Username</label>
              <LoginInputUsername
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
                ref={userRef}
              />
            </div>
            <div className="mb-12">
              <label className="my-1 font-semibold text-center text-gray-700">Password</label>
              <LoginInputPassword
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </LoginFormWrapper>

          <LoginOptionWrapper>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </LoginOptionWrapper>

          <button
            disabled={isFetching || dontSignIn}
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {dontSignIn && (
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
            Sign in
          </button>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};
