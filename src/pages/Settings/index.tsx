import React, { useCallback } from 'react';

import axios from 'axios';
import { Sidebar } from '../../components/Sidebar';
import { useState } from 'react';
import {
  SettingsContainer,
  SettingsWrapper,
  SettingsTitle,
  SettingsUpdateTitle,
  SettingsDeleteTitle,
  SettingsForm,
  SettingsPP,
  SettingsPPIcon,
  SettingsSubmit,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateFailure, updateStart, updateSuccess } from '../../app/slice';

interface UpdateUser {
  userId: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
}

export const Settings = () => {
  const [file, setFile] = useState<File>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.root.user);

  const PF = 'http://localhost:5000/images/';

  const setNewFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e !== null) setFile(e.target.files?.[0]);
  }, []);

  const setNewUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    [],
  );

  const setNewEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const setNewPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateStart());
    const updatedUser: UpdateUser = {
      userId: user._id,
      username,
      email,
      password,
      profilePic: '',
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        throw new Error('Upload failure');
      }
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch(updateSuccess(res.data));
    } catch (err) {
      dispatch(updateFailure());
    }
  };
  return (
    <SettingsContainer>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
          <SettingsDeleteTitle>Delete Account</SettingsDeleteTitle>
        </SettingsTitle>
        <SettingsForm onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <SettingsPP>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <SettingsPPIcon className="far fa-user-circle"></SettingsPPIcon>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={setNewFile}
            />
          </SettingsPP>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={setNewUsername}
          />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={setNewEmail} />
          <label>Password</label>
          <input type="password" onChange={setNewPassword} />
          <SettingsSubmit type="submit">Update</SettingsSubmit>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been updated...
            </span>
          )}
        </SettingsForm>
      </SettingsWrapper>
      <Sidebar />
    </SettingsContainer>
  );
};
