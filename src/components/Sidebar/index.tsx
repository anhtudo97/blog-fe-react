import React, { useEffect, useState } from 'react';
import { ImageWrapper, TagsWrapper } from './styled';

import { ICategory } from '../../types/post';

import { Link } from 'react-router-dom';
import { api } from '../../api';
import { AboutMeCard } from '../Card/AboutMeCard';
import { PopularCard } from '../Card/PopularCard';
import { Instagram } from '../Icons/Instagram';

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
      {/* Instagram */}
      <div className="mt-16">
        <div className="text-xl font-bold text-gray-900">Instagram</div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <ImageWrapper background="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        </div>
        <div className="flex items-center justify-center py-4 mt-3 bg-black rounded">
          <Instagram className="w-5 h-5 mr-3" />
          <div className="text-sm font-bold text-white">View instagram</div>
        </div>
      </div>
      {/* Tags */}
      <div className="mt-16">
        <div className="text-lg font-bold text-gray-900">Tags</div>
        <div className="flex flex-wrap mt-6">
          <TagsWrapper>Business</TagsWrapper>
          <TagsWrapper>Freelance</TagsWrapper>
          <TagsWrapper>Money</TagsWrapper>
          <TagsWrapper>Experience</TagsWrapper>
          <TagsWrapper>Lifestyle</TagsWrapper>
          <TagsWrapper>SEO</TagsWrapper>
          <TagsWrapper>Marketing</TagsWrapper>
        </div>
      </div>
      {/* Email newsletter */}
      <div className="mt-16">
        <div className="text-lg font-bold text-gray-900">Email newsletter</div>
        <div className="mt-3 text-sm text-gray-500">
          Sign up to receive email updates and to hear what's going on.
        </div>
        <div className="mt-7">
          <input
            placeholder="Your name"
            className="relative block w-full p-4 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            placeholder="Your email address"
            className="relative block w-full p-4 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div className="py-4 mt-3 text-center bg-black rounded">
        
          <div className="text-sm font-bold text-white">Subscribe to newsletter</div>
        </div>
      </div>
    </>
  );
};
