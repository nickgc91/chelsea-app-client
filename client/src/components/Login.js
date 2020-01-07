import React from "react";
import "../css/login.css";

class Login extends React.Component {

  state= {
    loggedIn: false,
    showForm: true,
    username: null
  }

  loginUser = e => { 
    e.preventDefault()
    this.setState({
      loggedIn: true,
      username: e.target.username.value,
      showForm: false
    })
      e.target.username.value = ''
      e.target.password.value = ''
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          {this.state.loggedIn ? 
          <div>
            <h1>Welcome back {this.state.username}</h1>
          </div> : null }
          {this.state.showForm ? 
          <div className="form">
            <form  onSubmit={(username, password) => this.loginUser(username, password)}>
                <label>
                    Username:  
                    <input type='text' name='username'/>
                </label>
                <br/><br/>
                <label>
                    Password: 
                    <input type='password' name='password'/>
                </label>
                <br></br>
                <br></br>
                <button
                onSubmit={e => this.loginUser(e)}>
                  Submit
                </button>
            </form>
          </div> : null }
        </div>
      </div>
    );
  }
}

export default Login;
