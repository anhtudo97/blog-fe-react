import React from 'react';
import { IPost } from '../../types/post';
import { MainContentCard } from '../Card/MainContentCard';
interface IPostsProps {
  posts: IPost[];
}

export const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <div className="col-start-1 col-end-7">
      {posts.map((p: IPost, index: number) => (
        <MainContentCard key={`${p.username}-${index}`} post={p} />
      ))}
    </div>
  );
};
