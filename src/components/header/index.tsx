import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleSm,
  HeaderTitleLg,
  HeaderImg,
} from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderTitleSm>React & Node</HeaderTitleSm>
        <HeaderTitleLg>Blog</HeaderTitleLg>
      </HeaderTitle>
      <HeaderImg
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bg"
      />
    </HeaderContainer>
  );
};
