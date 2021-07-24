import React, { useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer } from './styled';
import { useLocation } from 'react-router';
import { api } from '../../api';
import Layout from '../../layout';
import { VerticalCard } from 'src/components/Card/VerticalCard';
import { HorizontalCard } from 'src/components/Card/HorizontalCard';
import { MainContentCard } from 'src/components/Card/MainContentCard';

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
    <Layout>
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
          <div className="col-start-1 col-end-7">
            <MainContentCard />
            <MainContentCard />
            <MainContentCard />
            <MainContentCard />
            <MainContentCard />
          </div>
          <div className="col-start-8 col-end-10">
            <Sidebar />
          </div>
        </div>
        <Posts posts={posts} />
      </HomeContainer>
    </Layout>
  );
};
