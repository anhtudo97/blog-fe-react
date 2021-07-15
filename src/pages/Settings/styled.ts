import styled from 'styled-components';

const SettingsContainer = styled.div`
  display: flex;
`;

const SettingsWrapper = styled.div`
  flex: 9;
  padding: 20px;
`;

const SettingsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SettingsUpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
`;

const SettingsDeleteTitle = styled.span`
  color: red;
  font-size: 12px;
  cursor: pointer;
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 20px;
    margin-top: 20px;
  }

  & > input {
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
  }
`;

const SettingsPP = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  & > img {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

const SettingsPPIcon = styled.i`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: lightcoral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

const SettingsSubmit = styled.button`
  width: 150px;
  align-self: center;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

export {
  SettingsContainer,
  SettingsWrapper,
  SettingsTitle,
  SettingsUpdateTitle,
  SettingsDeleteTitle,
  SettingsForm,
  SettingsPP,
  SettingsPPIcon,
  SettingsSubmit,
};
