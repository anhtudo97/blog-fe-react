import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`w-full bg-cover rounded-md`}
  height: 200px;
  background-image: url(${(props: { background: string }) => props.background});
`;

export const AboutMeCard = () => {
  return (
    <>
      <ImageContainer background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></ImageContainer>
      <div className="mt-5 text-lg font-bold text-gray-900">Leon Hunt</div>
      <div className="mt-2 text-sm italic text-gray-500">
        Food & cooking bloger
      </div>
      <div className="mt-3 text-sm text-gray-600">
        Hi, I'm Leon. Cooking is the way I express my creative side to the
        world. Welcome to my Kitchen Corner on…
      </div>
      <div className="flex items-center justify-center w-full h-12 mt-4 font-bold text-white bg-black rounded-md">
        Continue Reading
      </div>
    </>
  );
};
