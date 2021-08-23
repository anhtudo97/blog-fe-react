import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import get from 'lodash/get';
import { useAppSelector } from 'src/app/hooks';
import { useLocalStorage } from 'react-use';
interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

export const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  const auth = useAppSelector((state) => state.root.auth);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [token] = useLocalStorage('token', '');
  
  useEffect(() => {
    if (token) {
      const tokenExpiration = get(jwtDecode<JwtPayload>(token), 'exp', 0);
      const dateNow = new Date();

      if (tokenExpiration < dateNow.getTime() / 1000) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [auth]);

  if (isAuthenticated === null) {
    return <></>;
  } else {
    if (!isAuthenticated) return <Redirect to="/login" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => React.createElement(Component, props)}
    />
  );
};
