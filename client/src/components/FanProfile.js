import React from "react";
import API from "./API";

class FanProfile extends React.Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/login");
    } else {
      this.retrieveData();
    }
  }

  retrieveData = () => {
    API.getProfileData().then(data => {
      this.setState({ userData: data });
    });
  };

  render() {
    return (
      <div>
        <h1>Fan Profile Page</h1>
        <h2>
          Welcome {this.state.userData.first_name}{" "}
          {this.state.userData.last_name}!
        </h2>
        <h3>Your favorite player is {this.state.userData.favorite_player}.</h3>
        <button onClick={this.props.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default FanProfile;
