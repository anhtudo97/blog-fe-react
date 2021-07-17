import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Top,
  TopSide,
  TopCenter,
  TopListItem,
  TopIcon,
  TopImg,
  TopList,
  TopSearchIcon,
} from './styled';
import { logout } from '../../app/slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const Topbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.root.user);

  const PF = 'http://localhost:5000/images/';

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Top>
      <TopSide>
        <TopIcon className="fab fa-facebook-square" />
        <TopIcon className="fab fa-twitter-square" />
        <TopIcon className="fab fa-pinterest-square" />
        <TopIcon className="fab fa-instagram-square" />
      </TopSide>
      <TopCenter>
        <TopList>
          <TopListItem>
            <Link className="link" to="/">
              HOME
            </Link>
          </TopListItem>
          <TopListItem>
            <Link className="link" to="/">
              ABOUT
            </Link>
          </TopListItem>
          <TopListItem>
            <Link className="link" to="/">
              CONTACT
            </Link>
          </TopListItem>
          <TopListItem>
            <Link className="link" to="/write">
              WRITE
            </Link>
          </TopListItem>
          <TopListItem onClick={handleLogout}>{user && 'LOGOUT'}</TopListItem>
        </TopList>
      </TopCenter>
      <TopSide>
        {user ? (
          <Link to="/settings">
            <TopImg
              className="topImg"
              src={PF + user.profilePic}
              alt="Profile picture"
            />
          </Link>
        ) : (
          <TopList>
            <TopListItem>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </TopListItem>
            <TopListItem>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </TopListItem>
          </TopList>
        )}
        <TopSearchIcon className="fas fa-search" />
      </TopSide>
    </Top>
  );
};
