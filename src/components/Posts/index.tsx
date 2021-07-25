import React from 'react';
import { IPost } from '../../types/post';
import { MainContentCard } from '../Card/MainContentCard';

import ReactPaginate from 'react-paginate';
import { ArrowPreviousIcon } from '../Icons/ArrowPrevious';
import { ArrowNextIcon } from '../Icons/ArrowNext';
interface IPostsProps {
  posts: IPost[];
}

export const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const handlePageClick = (data: any) => {
    console.log(data);
  };
  return (
    <div className="col-start-1 col-end-7 select-none">
      {posts.map((p: IPost, index: number) => (
        <MainContentCard key={`${p.username}-${index}`} post={p} />
      ))}
      <div className="flex items-center justify-center">
        <ReactPaginate
          previousClassName={
            'w-10 h-10 flex justify-center items-center rounded border mx-2'
          }
          nextClassName={
            'w-10 h-10 flex justify-center items-center rounded border mx-2'
          }
          previousLabel={<ArrowPreviousIcon />}
          nextLabel={<ArrowNextIcon />}
          breakLabel={'...'}
          breakClassName={
            'w-10 h-10 flex justify-center items-center rounded border mx-2'
          }
          initialPage={1}
          pageCount={10}
          marginPagesDisplayed={3}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={'flex'}
          activeLinkClassName={'bg-black text-white'}
          pageLinkClassName={
            'cursor-pointer px-4 h-10 flex justify-center items-center rounded border mx-2'
          }
          pageClassName={'cursor-pointer'}
          disabledClassName={'opacity-30'}
        />
      </div>
    </div>
  );
};
