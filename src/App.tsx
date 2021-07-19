import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { useAppSelector } from './app/hooks';
import { Register } from './pages/Register';
import { Write } from './pages/Write';
import { Settings } from './pages/Settings';
import { Single } from './pages/Single';
import { AnimatePresence } from 'framer-motion';

function App() {
  const user = useAppSelector((state) => state.root.user);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Topbar />
        <Switch>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} />}
          />

          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
