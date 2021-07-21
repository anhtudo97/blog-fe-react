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
import { api } from '../../api';
import { AboutMeCard } from '../Card/AboutMeCard';
import { PopularCard } from '../Card/PopularCard';

export const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await api.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <>
      <AboutMeCard />
      <div className="mt-16">
        <div className="text-xl font-bold text-gray-900">Popular posts</div>
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </>
  );
};
