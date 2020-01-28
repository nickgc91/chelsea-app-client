import React from "react";
import API from "./API";
import YouTube from "react-youtube";
import '../css/fanProfile.css'

class FanProfile extends React.Component {
  state = {
    userData: {},
    enterFavMatchData: false,
    favMatch: ''
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

  favMatchUpdate = () => {
    this.setState({ enterFavMatchData: true })
  }

  handleMatchUpdateSubmit = () => {
    this.setState({ 
      enterFavMatchData: false,

     })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      }
    };

    return (
      <div className="profile-grid-container">
        {/* <div className='item1'> */}
        <h1 className='item1'>
          Welcome {this.state.userData.first_name}{" "}
          {this.state.userData.last_name}!
        </h1>
        {/* </div> */}

        <div className='item2'>
          <h3>
            Your favorite player is {this.state.userData.favorite_player}.
          </h3>
          <YouTube
            videoId={this.state.userData.favorite_video}
            opts={opts}
            onReady={this._onReady}
          />
        </div>

        <div className='item3'>
            <h4>Favorite match of the season: </h4>
            {this.state.enterFavMatchData ? 
              <form onSubmit={ () => this.handleMatchUpdateSubmit() }>
              <label>What was your favorite match of the season?</label>
              <br></br>
              <br></br>
              <textarea 
              onChange={e => this.handleChange(e)}
              name="favMatch"
              />
              <br></br>
              <button>Submit</button>
              </form>
              : 
            <div>
            <p>{this.state.favMatch}</p>
            <button onClick={() => this.favMatchUpdate()}>Update</button>
            </div>
            }

            <h4>Most memorable moment:</h4>
            <p>Tomori's goal from way back.</p>
            <button>Update</button>
            <h4>Most uplifting win:</h4>
            <p>The comeback against Arsenal to win it 1-2 at the end :)</p>
            <button>Update</button>
            <h4>Most demoralizing defeat:</h4>
            <p>All those matches against the lower ranked sides that we keep losing against.</p>
            <button>Update</button>
        </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default FanProfile;
