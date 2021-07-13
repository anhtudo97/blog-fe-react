import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer } from './styled';
import axios from 'axios';
import { useLocation } from 'react-router';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
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
}
