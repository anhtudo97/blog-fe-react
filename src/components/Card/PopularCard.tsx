import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`w-full bg-cover rounded-md`}
  height: 195px;
  background-image: url(${(props: { background: string }) => props.background});
`;

export const PopularCard = () => {
  return (
    <div className="mt-6">
      <ImageContainer background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></ImageContainer>
      <div className="mt-5 text-lg font-bold text-gray-900">
        One of Saturn’s largest rings may be newer than anyone
      </div>
      <div className="mt-3 italic text-gray-500">
        Rickie Baroch - June 6, 2019
      </div>
    </div>
  );
};
