import React from "react";
import "../css/home.css";

class Team extends React.Component {
  state = {
    kepaInfo: false,
    reeceInfo: false,
    azpiInfo: false,
    zoumaInfo: false,
    // tomoriInfo: false,
    rudigerInfo: false,
    jorginhoInfo: false,
    willianInfo: false,
    kanteInfo: false,
    kovacicInfo: false,
    // mountInfo: false,
    pulisicInfo: false,
    tammyInfo: false
  };

  changeKepa = () => {
    this.setState({
      kepaInfo: !this.state.kepaInfo
    });
  };

  changeReece = () => {
    this.setState({
      reeceInfo: !this.state.reeceInfo
    });
  };

  changeAzpi = () => {
    this.setState({
      azpiInfo: !this.state.azpiInfo
    });
  };

  changeZouma = () => {
    this.setState({
      zoumaInfo: !this.state.zoumaInfo
    });
  };

  // changeTomori = () => {
  //   this.setState({
  //     tomoriInfo: !this.state.tomoriInfo
  //   });
  // };

  changeRudiger = () => {
    this.setState({
      rudigerInfo: !this.state.rudigerInfo
    });
  };

  changeKante = () => {
    this.setState({
      kanteInfo: !this.state.kanteInfo
    });
  };

  changeKovacic = () => {
    this.setState({
      kovacicInfo: !this.state.kovacicInfo
    });
  };

  changeJorginho = () => {
    this.setState({
      jorginhoInfo: !this.state.jorginhoInfo
    });
  };

  changeWillian = () => {
    this.setState({
      willianInfo: !this.state.willianInfo
    });
  };

  // changeMount = () => {
  //   this.setState({
  //     mountInfo: !this.state.mountInfo
  //   });
  // };

  changePulisic = () => {
    this.setState({
      pulisicInfo: !this.state.pulisicInfo
    });
  };

  changeTammy = () => {
    this.setState({
      tammyInfo: !this.state.tammyInfo
    });
  };

  render() {
    return (
      <div className="grid-container">
        {!this.state.kepaInfo ? (
          <div className="keeper">
            <img
              onMouseEnter={this.changeKepa}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p109745.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            1 Kepa Arrizabalaga
          </div>
        ) : (
          <div
            onMouseLeave={this.changeKepa}
            className="keeper"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p109745.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.3 }}
            />
            <br />
            1 Kepa Arrizabalaga
            <br />
            ------------------- <br />
            12 APPEARANCES <br />
            3 CLEAN SHEETS <br />
            20 SAVES <br />
            54% SHOTS SAVED
          </div>
        )}

        {!this.state.reeceInfo ? (
          <div className="wingBackRight">
            <img
              onMouseEnter={this.changeReece}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p225796.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            24 Reece James
          </div>
        ) : (
          <div
            onMouseLeave={this.changeReece}
            className="wingBackRight"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p225796.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            24 Reece James
            <br />
            ------------------- <br />
            8 APPEARANCES <br />
            0 GOALS <br />
            1 ASSISTS <br />
            75% TACKLE SUCCESS
          </div>
        )}

        {!this.state.azpiInfo ? (
          <div className="wingBackLeft">
            <img
              onMouseEnter={this.changeAzpi}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p41328.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            28 César Azpilicueta
          </div>
        ) : (
          <div
            onMouseLeave={this.changeAzpi}
            className="wingBackLeft"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p41328.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            28 César Azpilicueta
            <br />
            ------------------- <br />
            11 APPEARANCES <br />
            0 GOALS <br />
            2 ASSISTS <br />
            57% TACKLE SUCCESS
          </div>
        )}

        {!this.state.zoumaInfo ? (
          <div className="centerBackRight">
            <img
              onMouseEnter={this.changeZouma}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p103192.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            15 Kurt Zouma
          </div>
        ) : (
          <div
            onMouseLeave={this.changeZouma}
            className="centerBackRight"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p103192.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            15 Kurt Zouma <br />
            ------------------- <br />
            11 APPEARANCES <br />
            0 GOALS <br />
            0 ASSISTS <br />
            50% TACKLE SUCCESS
          </div>
        )}

        {/* {!this.state.tomoriInfo ? (
          <div className="centerBackLeft">
            <img
              onMouseEnter={this.changeTomori}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p194794.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            29 Fikayo Tomori
          </div>
        ) : (
          <div
            onMouseLeave={this.changeTomori}
            className="centerBackLeft"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p194794.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            29 Fikayo Tomori <br />
            ------------------- <br />
            9 APPEARANCES <br />
            1 GOALS <br />
            0 ASSISTS <br />
            57% TACKLE SUCCESS
          </div>
        )} */}

{!this.state.rudigerInfo ? (
          <div className="centerBackLeft">
            <img
              onMouseEnter={this.changeRudiger}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p102380.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            2 Antonio Rudiger
          </div>
        ) : (
          <div
            onMouseLeave={this.changeRudiger}
            className="centerBackLeft"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p102380.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            2 Antonio Rudiger <br />
            ------------------- <br />
            1 APPEARANCES <br />
            0 GOALS <br />
            0 ASSISTS <br />
            100% TACKLE SUCCESS
          </div>
        )}

        {!this.state.kanteInfo ? (
          <div className="offensiveMidfieldCenter">
            <img
              onMouseEnter={this.changeKante}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p116594.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            7 N'Golo Kanté
          </div>
        ) : (
          <div
            onMouseLeave={this.changeKante}
            className="offensiveMidfieldCenter"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p116594.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            7 N'Golo Kanté <br />
            ------------------- <br />
            5 APPEARANCES <br />
            2 GOALS <br />
            0 ASSISTS <br />
            80% PASS ACCURACY
          </div>
        )}

        {!this.state.jorginhoInfo ? (
          <div className="defensiveMidfieldRight">
            <img
              onMouseEnter={this.changeJorginho}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p85955.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            5 Jorginho
          </div>
        ) : (
          <div
            onMouseLeave={this.changeJorginho}
            className="defensiveMidfieldRight"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p85955.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            5 Jorginho <br />
            ------------------- <br />
            11 APPEARANCES <br />
            1 GOALS <br />
            2 ASSISTS <br />
            88% PASS ACCURACY
          </div>
        )}

        {!this.state.willianInfo ? (
          <div className="offensiveMidfieldRight">
            <img
              onMouseEnter={this.changeWillian}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p47431.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            10 Willian
          </div>
        ) : (
          <div
            onMouseLeave={this.changeWillian}
            className="offensiveMidfieldRight"
            style={{ width: "170px", height: "150px" }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p47431.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            10 Willian <br />
            ------------------- <br />
            11 APPEARANCES <br />
            2 GOALS <br />
            3 ASSISTS <br />
            41% SHOOTING ACCURACY
          </div>
        )}

        {/* {!this.state.mountInfo ? (
          <div className="offensiveMidfieldCenter">
            <img
              onMouseEnter={this.changeMount}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p184341.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            19 Mount
          </div>
        ) : (
          <div
            onMouseLeave={this.changeMount}
            className="offensiveMidfieldCenter"
            style={{
              width: "170px",
              height: "150px",
              paddingBottom: "100px"
            }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p184341.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            19 Mount <br />
            ------------------- <br />
            12 APPEARANCES <br />
            4 GOALS <br />
            1 ASSISTS <br />
            83% PASS ACCURACY
          </div>
        )} */}

{!this.state.kovacicInfo ? (
          <div className="defensiveMidfieldLeft">
            <img
              onMouseEnter={this.changeKovacic}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p91651.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            17 Mateo Kovacic
          </div>
        ) : (
          <div
            onMouseLeave={this.changeKovacic}
            className="defensiveMidfieldLeft"
            style={{
              width: "170px",
              height: "150px",
              paddingBottom: "100px"
            }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p91651.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            17 Mateo Kovacic <br />
            ------------------- <br />
            16 APPEARANCES <br />
            1 GOALS <br />
            2 ASSISTS <br />
            91% PASS ACCURACY
          </div>
        )}

        {!this.state.pulisicInfo ? (
          <div className="offensiveMidfieldLeft">
            <img
              onMouseEnter={this.changePulisic}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p176413.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            22 Christian Pulisic
          </div>
        ) : (
          <div
            onMouseLeave={this.changePulisic}
            className="offensiveMidfieldLeft"
            style={{
              width: "170px",
              height: "150px"
            }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p176413.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            22 Christian Pulisic <br />
            ------------------- <br />
            9 APPEARANCES <br />
            5 GOALS <br />
            2 ASSISTS <br />
            82% PASS ACCURACY
          </div>
        )}

        {!this.state.tammyInfo ? (
          <div className="striker">
            <img
              onMouseEnter={this.changeTammy}
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p173879.png"
              alt="image"
              style={{ width: "150px", height: "150px" }}
            />
            9 Tammy Abraham
          </div>
        ) : (
          <div
            onMouseLeave={this.changeTammy}
            className="striker"
            style={{
              width: "170px",
              height: "150px"
            }}
          >
            <img
              src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p173879.png"
              alt="image"
              style={{ width: "150px", height: "150px", opacity: 0.5 }}
            />{" "}
            <br />
            9 Tammy Abraham <br />
            ------------------- <br />
            12 APPEARANCES <br />
            10 GOALS <br />
            2 ASSISTS <br />
            63% SHOOTING ACCURACY
          </div>
        )}
      </div>
    );
  }
}

export default Team;
