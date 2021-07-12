import React, { useCallback } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
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
import { makeSelectUser } from '../../app/selectors';
import { logout } from '../../app/slice';
import { useDispatch, useSelector } from 'react-redux';

const logoutAction = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

const stateUserSelector = createSelector(makeSelectUser, (user) => ({
  user,
}));

export const Topbar = () => {
  const { user } = useSelector(stateUserSelector);
  const PF = 'http://localhost:5000/images/';

  const { logout } = logoutAction(useDispatch());

  const handleLogout = useCallback(() => {
    logout();
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
            <Link className="link" to="/">
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
