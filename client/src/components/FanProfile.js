import React from "react";
import API from "./API";
import YouTube from 'react-youtube'

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

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        
      }
    };

    return (
      <div>
        <h1>Welcome {this.state.userData.first_name}{" "}
          {this.state.userData.last_name}!</h1>
        <h3>Your favorite player is {this.state.userData.favorite_player}.</h3>
        <button onClick={this.props.signOut}>Sign Out</button>
        <YouTube
        videoId={this.state.userData.favorite_video}
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

}


export default FanProfile;
