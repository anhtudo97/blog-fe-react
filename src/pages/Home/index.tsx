import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer } from './styled';
import { useLocation } from 'react-router';
import { api } from '../../api';

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
    <>
      <Header />
      <HomeContainer>
        <Posts posts={posts} />
        <Sidebar />
      </HomeContainer>
    </>
  );
};
