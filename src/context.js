import React, { Component } from "react";

const Context = React.createContext();

export default class Provider extends Component {
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
