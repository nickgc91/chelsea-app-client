import React from "react";
import "../css/home.css";
import TableTeamStats from "./TableTeamStats";

class LeagueTable extends React.Component {
  state = {
    tableData: null
  };

  componentDidMount() {
    fetch(
      "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
          "x-rapidapi-key": "e63a2c72ccmsh059e0a7c09d4523p1f6745jsn133185a9a8eb"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(resp =>
        this.setState({
          tableData: resp
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  myTest = () => {
    console.log(this.state.tableData["records"]["0"]);
  };

  render() {
    {
      if (!this.state.tableData) {
        return <h1>loading teams info</h1>;
      } else {
        return (
          <div className="leagueTable">
            <div style={{ alignText: "center" }}>
                <table>
                  <tr>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Draw</th>
                    <th>Loss</th>
                    <th>Goals For</th>
                    <th>Goals Against</th>
                    <th>Points</th>
                  </tr>
                  {this.state.tableData["records"].forEach(element => {
                    return <TableTeamStats tableData={element} />;
                  })}
                </table>
            </div>
          </div>
        );
      }
    }
  }
}

export default LeagueTable;
