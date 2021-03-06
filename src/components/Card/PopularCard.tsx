import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`w-full p-5 bg-cover rounded`}
  height: 195px;
  background-image: url(${(props: { background: string }) => props.background});
`;

export const PopularCard = () => {
  return (
    <div className="mt-6">
      <ImageContainer background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png">
        <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded bg-bluebird">
          Vehicle
        </div>
      </ImageContainer>
      <div className="mt-5 text-lg font-bold text-gray-900">
        One of Saturn’s largest rings may be newer than anyone
      </div>
      <div className="mt-3 italic text-gray-500">
        Rickie Baroch - June 6, 2019
      </div>
    </div>
  );
};
