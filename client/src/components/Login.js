import React from "react";
import "../css/login.css";

import API from "./API";


class Login extends React.Component {
  state = {
    loggedIn: false,
    showForm: true,
    username: "",
    password: ""
  };

  handleSubmit = () => {
    API.signIn({
      username: this.state.username,
      password: this.state.password
    }).then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        
      }
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          {this.state.loggedIn ? (
            <div>
              <h1>Welcome back {this.state.username}</h1>
            </div>
          ) : null}
          {this.state.showForm ? (
            <div className="form">
              <form onSubmit={() => this.handleSubmit()}>
                <label>
                  Username:
                  <input
                    onChange={e => this.handleChange(e)}
                    type="text"
                    name="username"
                  />
                </label>
                <br />
                <br />
                <label>
                  Password:
                  <input
                    onChange={e => this.handleChange(e)}
                    type="password"
                    name="password"
                  />
                </label>
                <br></br>
                <br></br>
                <button>Submit</button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Login;
