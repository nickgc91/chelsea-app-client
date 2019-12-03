import React from "react";
import { directive } from "@babel/types";

const TableTeamStats = props => {
  return (
      <tr>
        <td>Team: {props.tableData.team}</td>
        <td>{props.tableData.played}</td>
        <td>{props.tableData.win}</td>
        <td>{props.tableData.draw}</td>
        <td>{props.tableData.loss}</td>
        <td>{props.tableData.goalsFor}</td>
        <td>{props.tableData.goalsAgainst}</td>
        <td>{props.tableData.points}</td>
      </tr>
  );
};

export default TableTeamStats;
