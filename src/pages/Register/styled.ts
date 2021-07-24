import styled from 'styled-components';
import tw from 'twin.macro';

const RegisterContainer = styled.div`
  height: calc(100vh - 60px);
  background-size: cover;
  ${tw`flex justify-center px-4 pt-40 bg-gray-100 sm:px-6 lg:px-8`}
`;

const RegisterForm = styled.form`
  ${tw`my-8 space-y-6`}
`;

const RegisterFormWrapper = styled.div`
  ${tw`rounded shadow-sm `}
`;

const RegisterInput = styled.input`
  ${tw`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
`;

const RegisterOptionWrapper = styled.div`
  ${tw`flex items-center justify-center`}
`;

const RegisterWrapper = styled.div`
  height: fit-content;
  box-shadow: 0px 0px 4px 0px #ffffff;
  ${tw`max-w-md p-6 space-y-8 bg-white border-gray-300 rounded`}
`;

export {
  RegisterContainer,
  RegisterWrapper,
  RegisterForm,
  RegisterInput,
  RegisterOptionWrapper,
  RegisterFormWrapper,
};
