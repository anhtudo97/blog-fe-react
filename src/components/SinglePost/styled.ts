import styled from 'styled-components';
const SinglePostContainer = styled.div`
  flex: 9;
`;

const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
`;

const SinglePostImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const SinglePostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: 'Lora', serif;
  font-size: 28px;
`;

const SinglePostTitleInput = styled.input`
  margin: 10px;
  font-family: 'Lora', serif;
  font-size: 28px;
  text-align: center;
  border: none;
  color: gray;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
  }
`;

const SinglePostEdit = styled.div`
  float: right;
  font-size: 16px;
`;

const SinglePostIcon = styled.i`
  margin-left: 10px;
  cursor: pointer;

  &first-child {
    color: teal;
  }

  &:last-child {
    color: tomato;
  }
`;

const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: 'Varela Round', sans-serif;
  color: #b39656;
`;

const SinglePostDesc = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;

  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const SinglePostDescInput = styled.textarea`
  border: none;
  color: #666;
  font-size: 18px;
  line-height: 25px;

  &:focus {
    outline: none;
  }
`;

const SinglePostButton = styled.button`
  width: 100px;
  border: none;
  background-color: teal;
  padding: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`;

export {
  SinglePostContainer,
  SinglePostWrapper,
  SinglePostImg,
  SinglePostTitle,
  SinglePostTitleInput,
  SinglePostEdit,
  SinglePostIcon,
  SinglePostInfo,
  SinglePostDesc,
  SinglePostDescInput,
  SinglePostButton,
};
