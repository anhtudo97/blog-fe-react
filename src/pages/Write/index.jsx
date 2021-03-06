import React, { useState } from 'react';
import {
  WriteContainer,
  WriteImg,
  WriteForm,
  WriteFormGroup,
  WriteIcon,
  WriteInput,
  WriteText,
  WriteSubmit,
} from './styled';
import { useAppSelector } from '../../app/hooks';
import { api } from '../../api';

export const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const user = useAppSelector((state) => state.root.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await api.post('/upload', data);
      } catch (err) {
        throw new Error(err);
      }
    }
    try {
      const res = await api.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <WriteContainer>
      {file && <WriteImg src={URL.createObjectURL(file)} alt="URL" />}
      <WriteForm onSubmit={handleSubmit}>
        <WriteFormGroup>
          <label htmlFor="fileInput">
            <WriteIcon className="fas fa-plus"></WriteIcon>
          </label>
          <input
            className="hidden"
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <WriteInput
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteText
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></WriteText>
        </WriteFormGroup>
        <WriteSubmit type="submit">Publish</WriteSubmit>
      </WriteForm>
    </WriteContainer>
  );
};
