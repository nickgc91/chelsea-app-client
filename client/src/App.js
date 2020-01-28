import React from "react";
import "./css/App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import News from "./components/News";
import Home from "./components/Home";
import Login from "./components/Login";
import FanProfile from "./components/FanProfile";
import API from "./components/API";
import NavBar from "./components/NavBar";


class App extends React.Component {
  state = {
    username: ""
  };

  signIn = user => {
    this.setState({ username: user.username });
    localStorage.setItem("token", user.token);
  };

  signOut = () => {
    this.setState({ username: "" })
    localStorage.removeItem("token")
  };

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      API.validate()
        .then(data => {
          if (data.error) {
            throw Error(data.error);
          } else {
            this.signIn(data) 
          }
        })
        .catch(error => {
          debugger
          alert(error)
        });
    }
  }

  render() {
    return (
      <div>
      <NavBar signOut={this.signOut} username={this.state.username}/>
      <Switch>
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
            <Login 
            {...routerProps} 
            signIn={this.signIn} 
            username={this.state.username}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          component={routerProps => (
            <FanProfile
              {...routerProps}
              username={this.state.username}
              signOut={this.signOut}
            />
          )}
        />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
