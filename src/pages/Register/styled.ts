import styled from 'styled-components';

const RegisterContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
`;

const RegisterTitle = styled.span`
  font-size: 50px;
`;

const RegisterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  & > label {
    margin: 10px 0;
  }
`;

const RegisterInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const RegisterButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

const RegisterLoginButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: lightcoral;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 10px;
`;

export {
  RegisterContainer,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterLoginButton,
  ErrorMessage,
};
