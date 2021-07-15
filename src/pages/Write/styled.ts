import styled from 'styled-components';

const WriteContainer = styled.div`
  padding-top: 50px;
`;

const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

const WriteForm = styled.form`
  position: relative;
`;

const WriteFormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

const WriteIcon = styled.i`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgb(121, 118, 118);
  cursor: pointer;
`;

const WriteInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;

  &:focus {
    outline: none;
  }
`;

const WriteText = styled(WriteInput)`
  font-size: 20px;
  height: 100vh;
`;

const WriteSubmit = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export {
  WriteContainer,
  WriteImg,
  WriteForm,
  WriteFormGroup,
  WriteIcon,
  WriteInput,
  WriteText,
  WriteSubmit,
};
