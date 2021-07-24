import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`bg-cover rounded`}
  height: 440px;
  background-image: url(${(props: { background: string }) => props.background});
`;

const ContentWrapper = styled.div`
  ${tw`mx-4 rounded p-7`}
  margin-top: -125px;
  height: '250px';
  background-color: white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const MainContentCard = () => {
  return (
    <div className="mb-14">
      <ImageContainer background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />

      <ContentWrapper>
        <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded bg-bluebird">
          Vehicle
        </div>
        <div className="mt-5 text-2xl font-bold text-gray-900">
          One of Saturn’s largest rings may be newer than anyone
        </div>
        <div className="mt-4 text-sm italic text-gray-500">
          Rickie Baroch - June 6, 2019
        </div>
        <div className="mt-3 text-gray-500 text-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem
        </div>
      </ContentWrapper>
    </div>
  );
};
