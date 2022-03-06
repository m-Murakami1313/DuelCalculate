import { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Calculate1 } from "../Components/Pages/Calculate1";
import { Calculate2 } from "../Components/Pages/Calculate2";
import { Home } from "../Components/Pages/Home";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={`${url}`}>
              <Calculate1 />
            </Route>
            <Route path={`${url}/Calculate2`}>
              <Calculate2 />
            </Route>
          </Switch>
        )}
      ></Route>
    </Switch>
  );
});
