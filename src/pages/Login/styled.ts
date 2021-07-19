import styled from 'styled-components';
import tw from 'twin.macro';

const LoginContainer = styled.div`
  height: calc(100vh - 60px);
  background-size: cover;
  ${tw`flex justify-center px-4 pt-40 bg-gray-100 sm:px-6 lg:px-8`}
`;

const LoginForm = styled.form`
  ${tw`my-8 space-y-6`}
`;

const LoginFormWrapper = styled.div`
  ${tw`rounded-md shadow-sm `}
`;

const LoginInputUsername = styled.input`
  ${tw`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
`;

const LoginInputPassword = styled.input`
  ${tw`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
`;

const LoginOptionWrapper = styled.div`
  ${tw`flex items-center justify-between`}
`;

const LoginWrapper = styled.div`
  height: fit-content;
  box-shadow: 0px 0px 4px 0px #ffffff;
  ${tw`max-w-md p-6 space-y-8 bg-white border-gray-300 rounded-md`}
`;

export {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  LoginInputUsername,
  LoginInputPassword,
  LoginOptionWrapper,
  LoginFormWrapper,
};
