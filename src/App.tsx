import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { userSelector } from './app/selectors';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const stateUserSelector = createSelector(userSelector, (user) => ({
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
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/register">{user ? <Home /> : <Register />}</Route> */}
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        {/* <Route path="/write">{user ? <Write /> : <Register />}</Route> */}
        {/* <Route path="/settings">{user ? <Settings /> : <Register />}</Route> */}
        {/* <Route path="/post/:postId">
          <Single />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
