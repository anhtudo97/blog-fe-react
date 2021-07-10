import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { makeSelectUser } from './app/selectors';
import { Topbar } from './components/Topbar';

const stateUserSelector = createSelector(makeSelectUser, (user) => ({
  user,
}));

function App() {
  const { user } = useSelector(stateUserSelector);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <Topbar />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        {/* <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
