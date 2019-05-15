import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log("My state as Value", value);
          const { track_list } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return <h1>Tracks Loaded</h1>;
          }
        }}
      </Consumer>
    );
  }
}
