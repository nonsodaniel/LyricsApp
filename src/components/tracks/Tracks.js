import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log("My state as Value", value);
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h1>{heading}</h1>
                <div className="row">
                  {track_list.map(item => {
                    return (
                      <Track key={item.track.track_id} track={item.track} />
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
