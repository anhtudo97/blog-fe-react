import styled from 'styled-components';

const SidebarContainer = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 15px;
`;

const Paragraph = styled.p`
  padding: 30px;
`;

const SidebarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

const SidebarListItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

const SidebarSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarIcon = styled.i`
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

export {
  SidebarIcon,
  SidebarSocial,
  SidebarListItem,
  SidebarList,
  Paragraph,
  Image,
  SidebarTitle,
  SidebarItem,
  SidebarContainer,
};
