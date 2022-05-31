import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./page/Login";
import AllUsers from "./page/AllUsers";
import UserInfo from "./page/UserInfo";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path={["/allusers"]} component={AllUsers} />
        <Route exact path={["/userInfo"]} component={UserInfo} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
