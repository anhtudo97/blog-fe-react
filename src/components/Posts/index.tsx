import React from 'react';
import { IPost } from '../../types/post';
import { Post } from '../Post';
import { PostsContainer } from './styled';
interface IPosts {
  posts: IPost[];
}

export const Posts: React.FC<IPosts> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map((p: IPost, index: number) => (
        <Post key={`${p.username}-${index}`} post={p} />
      ))}
    </PostsContainer>
  );
};
