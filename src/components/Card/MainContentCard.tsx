import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { IPost } from 'src/types/post';
import styled from 'styled-components';
import tw from 'twin.macro';
import { format } from 'date-fns';

const ImageContainer = styled.div`
  ${tw`bg-cover rounded`}
  height: 440px;
  background-image: url('${(props: { background: string }) =>
    props.background}');
`;

const ContentWrapper = styled.div`
  ${tw`mx-4 rounded p-7`}
  margin-top: -125px;
  height: '250px';
  background-color: white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

interface PostProps {
  post: IPost;
}

export const MainContentCard: React.FC<PostProps> = ({ post }) => {
  const { photo, desc, createdAt, title, username, _id } = post;
  const history = useHistory();

  const PF = 'http://localhost:5000/images/';

  const handlePostDetail = useCallback(() => {
    history.push({
      pathname: `/post/${_id}`,
      state: {
        id: `${_id}`,
      },
    });
  }, [_id]);

  return (
    <div className="mb-14">
      <ImageContainer background={`${PF}${photo}`} />

      <ContentWrapper>
        <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded bg-bluebird">
          Vehicle
        </div>
        <div
          onClick={handlePostDetail}
          className="mt-5 text-2xl font-bold text-gray-900 cursor-pointer"
        >
          {title}
        </div>
        <div className="mt-4 text-sm italic text-gray-500">
          {username} - {format(new Date(createdAt), 'MMMM dd, yyyy')}
        </div>
        <div className="mt-3 text-gray-500 text-md">{desc}</div>
      </ContentWrapper>
    </div>
  );
};
