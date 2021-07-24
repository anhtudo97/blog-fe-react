import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface VerticalCardProps {
  image: string;
  author: string;
  date: string;
}

const Container = styled.div`
  ${tw`flex flex-col justify-between col-start-1 col-end-2 p-4 bg-black bg-cover rounded`}
  height: 560px;
  background-image: url(${(props: { background: string }) => props.background});
`;

export const VerticalCard = () => {
  return (
    <Container background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png">
      <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded bg-bluebird">
        Vehicle
      </div>
      <div>
        <div className="text-sm text-white">Rickie Baroch - June 6, 2019</div>
        <div className="text-2xl font-bold text-white">
          One of Saturn’s largest rings may be newer than anyone
        </div>
      </div>
    </Container>
  );
};
