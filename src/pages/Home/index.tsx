import React, { useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer, InstagramWrapper } from './styled';
import { useLocation } from 'react-router';
import { api } from '../../api';
import Transition from '../../layout';
import { VerticalCard } from 'src/components/Card/VerticalCard';
import { HorizontalCard } from 'src/components/Card/HorizontalCard';
import { PopularCard } from 'src/components/Card/PopularCard';
import { Facebook } from 'src/components/Icons/Facebook';
import { Pinterest } from 'src/components/Icons/Pinterest';
import { Twitter } from 'src/components/Icons/Twitter';
import { GooglePlus } from 'src/components/Icons/GooglePlus';
import { Instagram } from 'src/components/Icons/InstagramIcon';

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

  useEffect(() => {
    console.log(posts);
  }, [posts]);

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
      <div className="mt-20 bg-gray-800">
        <div className="container grid grid-cols-3 gap-10 py-10 mx-auto">
          <div>
            <div className="flex items-center justify-start">
              <div className="mr-2 text-sm text-white">Premium</div>
              <div className="px-2 py-1 text-white uppercase rounded bg-bluebird">
                car
              </div>
            </div>
            <div className="text-white mt-7">
              Short description about the company Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </div>
            <div className="mt-16">
              <div className="text-xl font-bold text-white">Keep in touch</div>
              <div className="flex items-center justify-start mt-6">
                <div className="mr-4">
                  <Facebook />
                </div>
                <div className="mr-4">
                  <Twitter />
                </div>
                <div className="mr-4">
                  <Pinterest />
                </div>
                <div className="mr-4">
                  <GooglePlus />
                </div>
                <InstagramWrapper>
                  <Instagram />
                </InstagramWrapper>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Transition>
  );
};
