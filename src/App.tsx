import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { useAppDispatch } from './app/hooks';
import { Register } from './pages/Register';
import { Write } from './pages/Write';
import { Settings } from './pages/Settings';
import { Single } from './pages/Single';
import { AnimatePresence } from 'framer-motion';
import { Footer } from 'src/components/Footer';
import { useLocalStorage } from 'react-use';
import { PrivateRoute } from './components/Route/PrivateRoute';
import { setAuth } from './app/slice';

function App() {
  const dispatch = useAppDispatch();
  const [token] = useLocalStorage('token', '');

  useEffect(() => {
    dispatch(setAuth(token));
  }, [token]);

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
          <Route path="/login">{<Login />}</Route>
          <Route path="/register">{<Register />}</Route>
          <PrivateRoute path="/write" component={Write} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/post/:postId" component={Single} />
        </Switch>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
