import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Class Component {this.props.name} a.k.a {this.props.alias}</h1>
  }
}
//class comonents have predefined props keyword and this is used for variable
export default Welcome
