import styled from 'styled-components';
import tw from 'twin.macro';

const HomeContainer = styled.div`
  ${tw`container mx-auto mt-4`}
`;

const InstagramWrapper = styled.div`
  ${tw`flex items-center justify-center mr-4 rounded bg-blackmean`};
  width: 34px;
  height: 34px;
`;

export { HomeContainer, InstagramWrapper };
