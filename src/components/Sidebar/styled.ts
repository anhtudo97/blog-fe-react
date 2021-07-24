import tw from 'twin.macro';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  ${tw`w-full bg-cover rounded`}
  height: 130px;
  background-image: url(${(props: { background: string }) => props.background});
`;

const TagsWrapper = styled.div`
  ${tw`px-4 py-1 mb-2 mr-2 text-gray-800 rounded bg-humanSkin`};
  width: fit-content;
`;

export { ImageWrapper, TagsWrapper };
