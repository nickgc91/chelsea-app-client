import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import News from "./components/News";
import Home from "./components/Home";
import Login from "./components/Login";
import FanProfile from "./components/FanProfile";

class App extends React.Component {
  state = {
    username: ""
  };

  signIn = username => {
    this.setState({ username });
  };

  signOut = () => {
    this.setState({ username: "" });
  };

  render() {
    return (
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/news"
          component={routerProps => <News {...routerProps} />}
        />
        <Route
          exact
          path="/login"
          component={routerProps => (
            <Login {...routerProps} signIn={this.signIn} />
          )}
        />
        <Route
          exact
          path="/profile"
          component={routerProps => (
            <FanProfile {...routerProps}  />
          )}
        />
      </switch>
    );
  }
}

export default App;
