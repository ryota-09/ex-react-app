import { Route, Switch } from "react-router-dom";
import { PageRoutes } from "../router/PageRoutes";
import { Home } from "../components/Home"

export const Router = () => {
  return (
    <Switch>
      <Route
      path="/"
      render={({ match: url }) => (
        <Switch>
          {PageRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${route.path}`}
            >
              {route.children} 
            </Route>
          ))}
        </Switch>
      )}
    ></Route>
    </Switch>
  );
};
