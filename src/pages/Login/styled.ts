import styled from 'styled-components';
const LoginContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
  background-size: cover;
`;

const LoginTitle = styled.span`
  font-size: 50px;
`;

const LoginForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  & > label {
    margin: 10px 0;
  }
`;

const LoginInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(252, 173, 173);
  }
`;

const LoginRegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

export {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginRegisterButton,
};
