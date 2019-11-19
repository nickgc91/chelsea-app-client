import React from "react";
import "../css/home.css";
import Team from "./Team"
import Fixtures from "./Fixtures"

class Home extends React.Component {
  state = {
    showFixtures: true,
    showTeam: false,
    showTable: false
  }

  onClickToggleShowFixtures = () => {
    this.setState({
      showFixtures: true,
      showTeam: false,
      showTable: false
    });
  }

  onClickToggleShowTable = () => {
    this.setState({
      showTable: true,
      showFixtures: false,
      showTeam: false,
    });
  }

  onClickToggleShowTeam = () => {
    this.setState({
      showTeam: true,
      showFixtures: false,
      showTable: false
    });
  }



  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowFixtures}>
      <h3>Show Chelsea Fixtures</h3></button> 
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowTable}>
      <h3>Show Premier League Table</h3></button> 
      <button
      style={{ paddingBottom: '10px', width: '200px', color: 'white' }} 
      className="title"
      onClick={this.onClickToggleShowTeam}>
      <h3>Display Starting 11</h3></button> 
      <div className="main-grid">
        
        {this.state.showTeam ? 
        <Team /> : null }
        {this.state.showFixtures ? 
        <Fixtures /> : null }
      </div>
      </div>
    );
  }
}

export default Home;
