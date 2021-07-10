import styled from 'styled-components';

const Top = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  z-index: 999;
`;

const TopSide = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopCenter = styled.div`
  flex: 6;
`;

const TopIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`;

const TopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const TopList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TopListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

const TopSearchIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`;

export {
  Top,
  TopSide,
  TopCenter,
  TopListItem,
  TopIcon,
  TopImg,
  TopList,
  TopSearchIcon,
};
