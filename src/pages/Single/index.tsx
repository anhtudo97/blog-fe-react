import React, { useEffect, useState } from 'react';
import { api } from 'src/api';
import { Sidebar } from '../../components/Sidebar';
import { SinglePost } from '../../components/SinglePost';
import { SingleContainer } from './styled';
import Transition from 'src/layout';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICategory, IPost } from 'src/types/post';

export const Single = () => {
  const location = useLocation();
  const { id }: any = location.state;
  const [post, setPost] = useState<IPost | null>(null);

  const getPost = async () => {
    const res = await api.get('/posts/' + id);
    const {
      data: { _id, desc, photo, username, categories, createdAt, title },
    } = res;
    setPost({ _id, desc, photo, username, categories, createdAt, title });
  };

  const PF = 'http://localhost:5000/images/';
  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <Transition>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="mt-6 font-semibold text-gray-500">Published June 23, 2021</div>
        <div className="mt-4 text-3xl font-bold text-gray-900">
          {post?.title}
        </div>
        <div className="flex flex-wrap items-center justify-center mt-5 ">
          {post?.categories.map((c: ICategory, index: number) => {
            return (
              <div
                key={`${c}-${index}`}
                className="px-4 py-1 text-gray-800 bg-gray-200 rounded"
              >
                {c}
              </div>
            );
          })}
        </div>
        <div>
          <ImageContainer src={PF + post?.photo || ''} alt="" />
        </div>
        <div className="mt-5 font-mono">{post?.desc}</div>
      </div>
    </Transition>
  );
};

// const ImageContainer = styled.div`
//   ${tw`flex justify-center mt-10 bg-cover rounded`}
//   height: 500px;
//   width: 100%;
//   background-image: url(${(props: { background: string }) => props.background});
// `;

const ImageContainer = styled.img`
  ${tw`object-cover rounded`}
  height: auto;
  width: 100%;
`;
