import React from "react";
import "../css/home.css";
import Team from "./Team"
import { withRouter } from 'react-router-dom'
import Fixtures from "./Fixtures"
import LeagueTable from "./LeagueTable"

class Home extends React.Component {
  state = {
    showFixturesTable: true,
    showTeam: false,
    showLeagueTable: false
  }

  onClickToggleShowFixtures = () => {
    this.setState({
      showFixturesTable: true,
      showTeam: false,
      showLeagueTable: false
    });
  }

  onClickToggleShowTable = () => {
    this.setState({
      showLeagueTable: true,
      showFixturesTable: false,
      showTeam: false,
    });
  }

  onClickToggleShowTeam = () => {
    this.setState({
      showTeam: true,
      showFixturesTable: false,
      showLeagueTable: false
    });
  }



  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowFixtures}>
      <h3>Chelsea Fixtures</h3></button> 
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowTable}>
      <h3>Premier League Table</h3></button> 
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowTeam}>
      <h3>Starting 11</h3></button> 
      <div className="main-grid">
        
        {this.state.showTeam ? 
        <Team /> : null }
        {this.state.showFixturesTable ? 
        <Fixtures /> : null }
        {this.state.showLeagueTable ? 
        <LeagueTable /> : null }

      </div>
      </div>
    );
  }
}

export default withRouter(Home);
