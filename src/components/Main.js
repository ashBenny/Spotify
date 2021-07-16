import React from "react";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";

import UpperNav from "./UpperNav";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">
        <UpperNav />
      </div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
