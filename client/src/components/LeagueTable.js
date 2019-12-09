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
                  <th>Points</th>
                  <th>Played</th>
                  <th>Win</th>
                  <th>Draw</th>
                  <th>Loss</th>
                  <th>Goals For</th>
                  <th>Goals Against</th>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][0]["team"]}</td>
                  <td>{this.state.tableData["records"][0]["points"]}</td>
                  <td>{this.state.tableData["records"][0]["played"]}</td>
                  <td>{this.state.tableData["records"][0]["win"]}</td>
                  <td>{this.state.tableData["records"][0]["draw"]}</td>
                  <td>{this.state.tableData["records"][0]["loss"]}</td>
                  <td>{this.state.tableData["records"][0]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][0]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][1]["team"]}</td>
                  <td>{this.state.tableData["records"][1]["points"]}</td>
                  <td>{this.state.tableData["records"][1]["played"]}</td>
                  <td>{this.state.tableData["records"][1]["win"]}</td>
                  <td>{this.state.tableData["records"][1]["draw"]}</td>
                  <td>{this.state.tableData["records"][1]["loss"]}</td>
                  <td>{this.state.tableData["records"][1]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][1]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][2]["team"]}</td>
                  <td>{this.state.tableData["records"][2]["points"]}</td>
                  <td>{this.state.tableData["records"][2]["played"]}</td>
                  <td>{this.state.tableData["records"][2]["win"]}</td>
                  <td>{this.state.tableData["records"][2]["draw"]}</td>
                  <td>{this.state.tableData["records"][2]["loss"]}</td>
                  <td>{this.state.tableData["records"][2]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][2]["goalsAgainst"]}</td>
                </tr>

                <tr style={{ backgroundColor: '#034694', color: 'white' }}>
                  <td>{this.state.tableData["records"][3]["team"]}</td>
                  <td>{this.state.tableData["records"][3]["points"]}</td>
                  <td>{this.state.tableData["records"][3]["played"]}</td>
                  <td>{this.state.tableData["records"][3]["win"]}</td>
                  <td>{this.state.tableData["records"][3]["draw"]}</td>
                  <td>{this.state.tableData["records"][3]["loss"]}</td>
                  <td>{this.state.tableData["records"][3]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][3]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][4]["team"]}</td>
                  <td>{this.state.tableData["records"][4]["points"]}</td>
                  <td>{this.state.tableData["records"][4]["played"]}</td>
                  <td>{this.state.tableData["records"][4]["win"]}</td>
                  <td>{this.state.tableData["records"][4]["draw"]}</td>
                  <td>{this.state.tableData["records"][4]["loss"]}</td>
                  <td>{this.state.tableData["records"][4]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][4]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][5]["team"]}</td>
                  <td>{this.state.tableData["records"][5]["points"]}</td>
                  <td>{this.state.tableData["records"][5]["played"]}</td>
                  <td>{this.state.tableData["records"][5]["win"]}</td>
                  <td>{this.state.tableData["records"][5]["draw"]}</td>
                  <td>{this.state.tableData["records"][5]["loss"]}</td>
                  <td>{this.state.tableData["records"][5]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][5]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][6]["team"]}</td>
                  <td>{this.state.tableData["records"][6]["points"]}</td>
                  <td>{this.state.tableData["records"][6]["played"]}</td>
                  <td>{this.state.tableData["records"][6]["win"]}</td>
                  <td>{this.state.tableData["records"][6]["draw"]}</td>
                  <td>{this.state.tableData["records"][6]["loss"]}</td>
                  <td>{this.state.tableData["records"][6]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][6]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][7]["team"]}</td>
                  <td>{this.state.tableData["records"][7]["points"]}</td>
                  <td>{this.state.tableData["records"][7]["played"]}</td>
                  <td>{this.state.tableData["records"][7]["win"]}</td>
                  <td>{this.state.tableData["records"][7]["draw"]}</td>
                  <td>{this.state.tableData["records"][7]["loss"]}</td>
                  <td>{this.state.tableData["records"][7]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][7]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][8]["team"]}</td>
                  <td>{this.state.tableData["records"][8]["points"]}</td>
                  <td>{this.state.tableData["records"][8]["played"]}</td>
                  <td>{this.state.tableData["records"][8]["win"]}</td>
                  <td>{this.state.tableData["records"][8]["draw"]}</td>
                  <td>{this.state.tableData["records"][8]["loss"]}</td>
                  <td>{this.state.tableData["records"][8]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][8]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][9]["team"]}</td>
                  <td>{this.state.tableData["records"][9]["points"]}</td>
                  <td>{this.state.tableData["records"][9]["played"]}</td>
                  <td>{this.state.tableData["records"][9]["win"]}</td>
                  <td>{this.state.tableData["records"][9]["draw"]}</td>
                  <td>{this.state.tableData["records"][9]["loss"]}</td>
                  <td>{this.state.tableData["records"][9]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][9]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][10]["team"]}</td>
                  <td>{this.state.tableData["records"][10]["points"]}</td>
                  <td>{this.state.tableData["records"][10]["played"]}</td>
                  <td>{this.state.tableData["records"][10]["win"]}</td>
                  <td>{this.state.tableData["records"][10]["draw"]}</td>
                  <td>{this.state.tableData["records"][10]["loss"]}</td>
                  <td>{this.state.tableData["records"][10]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][10]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][11]["team"]}</td>
                  <td>{this.state.tableData["records"][11]["points"]}</td>
                  <td>{this.state.tableData["records"][11]["played"]}</td>
                  <td>{this.state.tableData["records"][11]["win"]}</td>
                  <td>{this.state.tableData["records"][11]["draw"]}</td>
                  <td>{this.state.tableData["records"][11]["loss"]}</td>
                  <td>{this.state.tableData["records"][11]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][11]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][12]["team"]}</td>
                  <td>{this.state.tableData["records"][12]["points"]}</td>
                  <td>{this.state.tableData["records"][12]["played"]}</td>
                  <td>{this.state.tableData["records"][12]["win"]}</td>
                  <td>{this.state.tableData["records"][12]["draw"]}</td>
                  <td>{this.state.tableData["records"][12]["loss"]}</td>
                  <td>{this.state.tableData["records"][12]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][12]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][13]["team"]}</td>
                  <td>{this.state.tableData["records"][13]["points"]}</td>
                  <td>{this.state.tableData["records"][13]["played"]}</td>
                  <td>{this.state.tableData["records"][13]["win"]}</td>
                  <td>{this.state.tableData["records"][13]["draw"]}</td>
                  <td>{this.state.tableData["records"][13]["loss"]}</td>
                  <td>{this.state.tableData["records"][13]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][13]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][14]["team"]}</td>
                  <td>{this.state.tableData["records"][14]["points"]}</td>
                  <td>{this.state.tableData["records"][14]["played"]}</td>
                  <td>{this.state.tableData["records"][14]["win"]}</td>
                  <td>{this.state.tableData["records"][14]["draw"]}</td>
                  <td>{this.state.tableData["records"][14]["loss"]}</td>
                  <td>{this.state.tableData["records"][14]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][14]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][15]["team"]}</td>
                  <td>{this.state.tableData["records"][15]["points"]}</td>
                  <td>{this.state.tableData["records"][15]["played"]}</td>
                  <td>{this.state.tableData["records"][15]["win"]}</td>
                  <td>{this.state.tableData["records"][15]["draw"]}</td>
                  <td>{this.state.tableData["records"][15]["loss"]}</td>
                  <td>{this.state.tableData["records"][15]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][15]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][16]["team"]}</td>
                  <td>{this.state.tableData["records"][16]["points"]}</td>
                  <td>{this.state.tableData["records"][16]["played"]}</td>
                  <td>{this.state.tableData["records"][16]["win"]}</td>
                  <td>{this.state.tableData["records"][16]["draw"]}</td>
                  <td>{this.state.tableData["records"][16]["loss"]}</td>
                  <td>{this.state.tableData["records"][16]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][16]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][17]["team"]}</td>
                  <td>{this.state.tableData["records"][17]["points"]}</td>
                  <td>{this.state.tableData["records"][17]["played"]}</td>
                  <td>{this.state.tableData["records"][17]["win"]}</td>
                  <td>{this.state.tableData["records"][17]["draw"]}</td>
                  <td>{this.state.tableData["records"][17]["loss"]}</td>
                  <td>{this.state.tableData["records"][17]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][17]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][18]["team"]}</td>
                  <td>{this.state.tableData["records"][18]["points"]}</td>
                  <td>{this.state.tableData["records"][18]["played"]}</td>
                  <td>{this.state.tableData["records"][18]["win"]}</td>
                  <td>{this.state.tableData["records"][18]["draw"]}</td>
                  <td>{this.state.tableData["records"][18]["loss"]}</td>
                  <td>{this.state.tableData["records"][18]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][18]["goalsAgainst"]}</td>
                </tr>

                <tr>
                  <td>{this.state.tableData["records"][19]["team"]}</td>
                  <td>{this.state.tableData["records"][19]["points"]}</td>
                  <td>{this.state.tableData["records"][19]["played"]}</td>
                  <td>{this.state.tableData["records"][19]["win"]}</td>
                  <td>{this.state.tableData["records"][19]["draw"]}</td>
                  <td>{this.state.tableData["records"][19]["loss"]}</td>
                  <td>{this.state.tableData["records"][19]["goalsFor"]}</td>
                  <td>{this.state.tableData["records"][19]["goalsAgainst"]}</td>
                </tr>
              

                {/* {this.state.tableData["records"].forEach(element => {
                  debugger;
                  return (
                    <tr>
                      <td>{element["team"]}</td>
                      <td>{element["played"]}</td>
                      <td>{element["win"]}</td>
                      <td>{element["draw"]}</td>
                      <td>{element["loss"]}</td>
                      <td>{element["goalsFor"]}</td>
                      <td>{element["goalsAgainst"]}</td>
                      <td>{element["points"]}</td>
                    </tr>
                  );
                })} */}
              </table>
            </div>
          </div>
        );
      }
    }
  }
}

export default LeagueTable;
