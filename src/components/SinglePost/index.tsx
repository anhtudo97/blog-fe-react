import React, { useEffect, useState } from 'react';
import {
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
} from './styled';

import axios from 'axios';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { IPost } from '../../types/post';
import { useAppSelector } from '../../app/hooks';

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState<IPost | Record<string, number>>({});
  const PF = 'http://localhost:5000/images/';
  const user = useAppSelector((state) => state.root.user);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {
      throw new Error('Some thing went wrong');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      throw new Error('Some thing went wrong');
    }
  };

  return (
    <SinglePostContainer>
      <SinglePostWrapper>
        {post.photo && <SinglePostImg src={PF + post.photo} alt="Photo" />}
        {updateMode ? (
          <SinglePostTitleInput
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <SinglePostTitle>
            {title}
            {post.username === user?.username && (
              <SinglePostEdit>
                <SinglePostIcon
                  className="far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></SinglePostIcon>
                <SinglePostIcon
                  className="far fa-trash-alt"
                  onClick={handleDelete}
                ></SinglePostIcon>
              </SinglePostEdit>
            )}
          </SinglePostTitle>
        )}
        <SinglePostInfo>
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </SinglePostInfo>
        {updateMode ? (
          <SinglePostDescInput
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <SinglePostDesc>{desc}</SinglePostDesc>
        )}
        {updateMode && (
          <SinglePostButton onClick={handleUpdate}>Update</SinglePostButton>
        )}
      </SinglePostWrapper>
    </SinglePostContainer>
  );
};
