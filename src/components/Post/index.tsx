import React from 'react';
import { Link } from 'react-router-dom';
import { IPost, ICategory } from '../../types/post';
import {
  PostContainer,
  PostInfo,
  PostImg,
  PostCat,
  PostTitle,
  PostDate,
  PostDesc,
} from './styled';

interface IPostProps {
  post: IPost;
}

export const Post: React.FC<IPostProps> = ({ post }) => {
  const { _id, categories, photo, title, createdAt, desc } = post;
  const PF = 'http://localhost:5000/images/';
  return (
    <PostContainer>
      {photo && <PostImg src={PF + photo} alt="Photo" />}
      <PostInfo>
        <div className="postCats">
          {categories.map((c: ICategory, index: number) => (
            <PostCat key={`${c}-${index}`}>{c.name}</PostCat>
          ))}
        </div>
        <Link to={`/post/${_id}`} className="link">
          <PostTitle>{title}</PostTitle>
        </Link>
        <hr />
        <PostDate>{new Date(createdAt).toDateString()}</PostDate>
      </PostInfo>
      <PostDesc>{desc}</PostDesc>
    </PostContainer>
  );
};
