import React from "react";
import API from "./API";
import YouTube from "react-youtube";
import "../css/fanProfile.css";

class FanProfile extends React.Component {
  state = {
    userData: {},
    enterFavMatchData: false,
    enterYoutubeVideoID: false,
    enterMemorableMoment: false,
    enterUpliftingWin: false,
    enterDemoralizingDefeat: false,
    favMatch: '',
    memorableMemory: "",
    upliftingWin: "",
    demoralizingDefeat: "",
    youTubeId: ""
  };

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/login");
    } else {
      this.retrieveData()
    }
  }


  retrieveData = () => {
    API.getProfileData().then(data => {
      this.setState({ 
        userData: data,
        favMatch: data.favorite_match,
        memorableMemory: data.memorable_moment,
        upliftingWin: data.uplifting_win,
        demoralizingDefeat: data.demoralizing_defeat,
        youTubeId: data.favorite_video
      });
    });
  };

  handleClickUpdate = () => {
    this.setState({
      enterFavMatchData: true
    });
  };

  favMatchClickUpdate = () => {
    this.setState({
      enterFavMatchData: true
    });
  };

  memorableMomentClickUpdate = () => {
    this.setState({
      enterMemorableMoment: true
    });
  };

  upliftingWinClickUpdate = () => {
    this.setState({
      enterUpliftingWin: true
    });
  };

  demoralizingDefeatClickUpdate = () => {
    this.setState({
      enterDemoralizingDefeat: true
    });
  };

  youTubeIdClickUpdate = () => {
    this.setState({
      enterYoutubeVideoID: true
    });
  };

  handleMatchUpdateSubmit = () => {
    API.updateFavMatch({data: this.state.favMatch})
    .then(data => {
      if (data.error) {
        throw Error(data.error);
      } 
    })
    .catch(error => {
      debugger
      alert(error)
    });
    this.setState({
      enterFavMatchData: false
    });
  };

  handleMemoryUpdateSubmit = () => {
    this.setState({
      enterMemorableMoment: false
    });
  };

  handleUpliftingWinUpdateSubmit = () => {
    this.setState({
      enterUpliftingWin: false
    });
  };

  handleDemoralizingDefeatUpdateSubmit = () => {
    this.setState({
      enterDemoralizingDefeat: false
    });
  };

  handleYoutubeVideoIdUpdateSubmit = () => {
    this.setState({
      enterYoutubeVideoID: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
        <h1 className="item1">
          Welcome {this.state.userData.first_name}{" "}
          {this.state.userData.last_name}!
        </h1>
        {/* </div> */}

        <div className="item2">
          <h3>
            Your favorite player is {this.state.userData.favorite_player}.
          </h3>
          {this.state.enterYoutubeVideoID ? (
            <form onSubmit={() => this.handleYoutubeVideoIdUpdateSubmit()}>
              <label>
                Type in the Youtube video ID of your favorite player or Chelsea
                video
              </label>
              <br></br>
              <br></br>
              <textarea onChange={e => this.handleChange(e)} name="youTubeId" />
              <br></br>
              <button>Submit</button>
            </form>
          ) : (
            <div>
              <YouTube
                videoId={this.state.youTubeId}
                opts={opts}
                onReady={this._onReady}
              />
              <button onClick={() => this.youTubeIdClickUpdate()}>
                Update
              </button>{" "}
            </div>
          )}
        </div>

        <div className="item3">
          <h4>Favorite match of the season: </h4>
          {this.state.enterFavMatchData ? (
            <form onSubmit={() => this.handleMatchUpdateSubmit()}>
              <label>What was your favorite match of the season?</label>
              <br></br>
              <br></br>
              <textarea onChange={e => this.handleChange(e)} name="favMatch" />
              <br></br>
              <button>Submit</button>
            </form>
          ) : (
            <div>
              <p>{this.state.favMatch}</p>
              <button onClick={() => this.favMatchClickUpdate()}>Update</button>
            </div>
          )}

          <h4>Most memorable moment:</h4>
          {this.state.enterMemorableMoment ? (
            <form onSubmit={() => this.handleMemoryUpdateSubmit()}>
              <label>What was your favorite match of the season?</label>
              <br></br>
              <br></br>
              <textarea
                onChange={e => this.handleChange(e)}
                name="memorableMemory"
              />
              <br></br>
              <button>Submit</button>
            </form>
          ) : (
            <div>
              <p>{this.state.memorableMemory}</p>
              <button onClick={() => this.memorableMomentClickUpdate()}>
                Update
              </button>{" "}
            </div>
          )}

          <h4>Most uplifting win:</h4>
          {this.state.enterUpliftingWin ? (
            <form onSubmit={() => this.handleUpliftingWinUpdateSubmit()}>
              <label>What was your favorite match of the season?</label>
              <br></br>
              <br></br>
              <textarea
                onChange={e => this.handleChange(e)}
                name="upliftingWin"
              />
              <br></br>
              <button>Submit</button>
            </form>
          ) : (
            <div>
              <p>{this.state.upliftingWin}</p>
              <button onClick={() => this.upliftingWinClickUpdate()}>
                Update
              </button>
            </div>
          )}

          <h4>Most demoralizing defeat:</h4>
          {this.state.enterDemoralizingDefeat ? (
            <form onSubmit={() => this.handleDemoralizingDefeatUpdateSubmit()}>
              <label>What was the most demoralizing defeat for you?</label>
              <br></br>
              <br></br>
              <textarea
                onChange={e => this.handleChange(e)}
                name="demoralizingDefeat"
              />
              <br></br>
              <button>Submit</button>
            </form>
          ) : (
            <div>
              <p>{this.state.demoralizingDefeat}</p>
              <button onClick={() => this.demoralizingDefeatClickUpdate()}>
                Update
              </button>{" "}
            </div>
          )}
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
