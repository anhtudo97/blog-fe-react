import React, { useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer } from './styled';
import { useLocation } from 'react-router';
import { api } from 'src/api';
import Transition from 'src/layout';
import { VerticalCard } from 'src/components/Card/VerticalCard';
import { HorizontalCard } from 'src/components/Card/HorizontalCard';
import { PopularCard } from 'src/components/Card/PopularCard';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  return (
    <Transition>
      <HomeContainer>
        <div className="grid gap-8 grid-colfs-3">
          <VerticalCard />
          <div className="grid grid-cols-2 col-start-2 col-end-5 gap-8">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </div>
        </div>
        <div className="grid grid-cols-9 mt-20">
          <Posts posts={posts} />
          <div className="col-start-8 col-end-10">
            <Sidebar />
          </div>
        </div>
        <div className="mt-20">
          <div className="text-3xl font-bold text-gray-900">Most popular</div>
          <div className="grid grid-cols-4 gap-8 mt-7">
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
          </div>
        </div>
      </HomeContainer>
    </Transition>
  );
};
