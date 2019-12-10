import React from "react";
import "../css/login.css";

class Login extends React.Component {
  loginUser = (username, password) => {
      console.log(username)
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          <div className="form">
            <form  onSubmit={(username, password) => this.loginUser(username, password)}>
                <label >
                    Username:  
                    <input type='text' name='username'/>
                </label>
                <br/><br/>
                <label>
                    Password: 
                    <input type='password' name='password'/>
                </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
