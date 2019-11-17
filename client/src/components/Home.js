import React from "react";
import "../css/home.css";

class Home extends React.Component {
  state = {
    kepaInfo: false
  };

  changeKepa = () => {
    this.setState({
      kepaInfo: !this.state.kepaInfo
    });
  };

  render() {
    return (
      <div className="main-grid">
        <div className="grid-container">
          <h1 className="title">TEAM</h1>
          {!this.state.kepaInfo ? (
            <div className="keeper">
              <img
                onMouseEnter={this.changeKepa}
                src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p109745.png"
                alt="image"
                style={{ width: "150px", height: "150px" }}
              />
              Kepa Arrizabalaga
            </div>
          ) : (
            <div
              onMouseLeave={this.changeKepa}
              className="keeper"
              style={{ width: "170px", height: "150px" }}
            >
              <img
                onMouseEnter={this.changeKepa}
                src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p109745.png"
                alt="image"
                style={{ width: "150px", height: "150px", opacity: 0.3 }}
              />
              12 APPEARANCES 
              3 CLEAN SHEETS 
              20 SAVES 
              54% SHOTS SAVED
            </div>
          )}

          <div className="wingBackLeft">
            <img
              src="https://chelseacore.com/wp-content/uploads/2018/10/Emerson-1.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Emerson Palmieri
          </div>
          <div className="wingBackRight">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p41328.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            César Azpilicueta
          </div>
          <div className="centerBackRight">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p103192.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Kurt Zouma
          </div>
          <div className="centerBackLeft">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p194794.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Fikayo Tomori
          </div>
          <div className="defensiveMidfieldLeft">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p116594.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            N'Golo Kanté
          </div>
          <div className="defensiveMidfieldRight">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p85955.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Jorginho
          </div>
          <div className="offensiveMidfieldRight">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p47431.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Willian
          </div>
          <div className="offensiveMidfieldCenter">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p184341.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Mason Mount
          </div>
          <div className="offensiveMidfieldLeft">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p176413.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Christian Pulisic
          </div>
          <div className="striker">
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p173879.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            Tammy Abraham
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
