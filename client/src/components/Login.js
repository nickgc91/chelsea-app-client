import React from "react";
import "../css/login.css";

import API from "./API";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    API.signIn({
      username: this.state.username,
      password: this.state.password
    }).then(data => {
      if (data.error) {
        throw Error(data.error)
      } else {
        this.props.signIn(data)
        this.props.history.push('/profile')
      }
    })
    .catch(error => {
      alert(error )
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="loginForm">
        <div className="form">
          <form onSubmit={e => this.handleSubmit(e)}>
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
      </div>
    );
  }
}

export default Login;
