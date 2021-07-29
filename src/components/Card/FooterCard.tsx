import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  ${tw`w-full mr-5 bg-cover rounded`}
  height: 95px;
  width: 95px;
  background-image: url(${(props: { background: string }) => props.background});
`;

const ContentWrapper = styled.div`
  max-width: 200px;
`;

export const FooterCard = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <ImageContainer background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
      <ContentWrapper>
        <div className="text-sm font-bold text-white">
          One of Saturn’s largest rings may be newer than…
        </div>
        <div className="mt-3 text-sm italic text-gray-500">
          Rickie Baroch - June 6, 2019
        </div>
      </ContentWrapper>
    </div>
  );
};
