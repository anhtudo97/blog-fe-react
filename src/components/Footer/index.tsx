import React from 'react';
import { Facebook } from 'src/components/Icons/Facebook';
import { Pinterest } from 'src/components/Icons/Pinterest';
import { Twitter } from 'src/components/Icons/Twitter';
import { GooglePlus } from 'src/components/Icons/GooglePlus';
import { Instagram } from 'src/components/Icons/InstagramIcon';

import { InstagramWrapper } from './styled';
import { FooterCard } from 'src/components/Card/FooterCard';

const menu = ['Home', 'Recipes', 'Article', 'Contact'];

export const Footer = () => {
  return (
    <div className="mt-20 bg-gray-700">
      <div className="container flex mx-auto py-11">
        <div
          style={{
            maxWidth: '280px',
          }}
          className="mr-32"
        >
          <div className="flex items-center justify-start">
            <div className="mr-2 text-sm text-white">Premium</div>
            <div className="px-2 py-1 text-white uppercase rounded bg-bluebird">
              car
            </div>
          </div>
          <div className="text-white mt-7">
            Short description about the company Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
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
        <div className="mr-28">
          <div className="text-xl font-bold text-white">Recent posts</div>
          <div className="mt-7">
            <FooterCard />
            <FooterCard />
            <FooterCard />
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">Newsletter</div>
          <div className="mt-16">
            <div className="mt-7">
              <input
                placeholder="Your name"
                className="relative block p-4 mb-3 text-gray-900 placeholder-gray-500 rounded appearance-none w-72 bg-blackmean focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <input
                placeholder="Your email address"
                className="relative block p-4 mb-3 text-gray-900 placeholder-gray-500 rounded appearance-none w-72 bg-blackmean focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="py-4 mt-3 text-center bg-gray-900 rounded">
              <div className="text-sm font-bold text-white">
                Subscribe to newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container flex items-center justify-between mx-auto py-11">
          <div className="text-sm text-white">
            @2019 Logwork. All Right Reserved.
          </div>
          <div className="flex text-sm text-white">
            {menu.map((m: string, index: number) => (
              <div key={`${m}-${index}`} className="mr-4">Home</div>
            ))}
            <div className="mr-4">Home</div>
            <div className="mr-4">Recipes</div>
            <div className="mr-4">Article</div>
            <div className="mr-4">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};
