import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  SidebarIcon,
  SidebarSocial,
  SidebarListItem,
  SidebarList,
  Paragraph,
  Image,
  SidebarTitle,
  SidebarItem,
  SidebarContainer,
} from './styled';

import { ICategory } from '../../types/post';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarTitle>ABOUT ME</SidebarTitle>
        <Image
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </Paragraph>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>CATEGORIES</SidebarTitle>
        <SidebarList>
          {cats.map((c: ICategory, index: number) => (
            <Link key={`${c}-${index}`} to={`/?cat=${c.name}`} className="link">
              <SidebarListItem>{c.name}</SidebarListItem>
            </Link>
          ))}
        </SidebarList>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>FOLLOW US</SidebarTitle>
        <SidebarSocial>
          <SidebarIcon className="fab fa-facebook-square"></SidebarIcon>
          <SidebarIcon className="fab fa-twitter-square"></SidebarIcon>
          <SidebarIcon className="fab fa-pinterest-square"></SidebarIcon>
          <SidebarIcon className="fab fa-instagram-square"></SidebarIcon>
        </SidebarSocial>
      </SidebarItem>
    </SidebarContainer>
  );
}
