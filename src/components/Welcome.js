import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Class Component {props.name} a.k.a {props.alias}</h1>
  }
}

export default Welcome
