import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'welcome new ram'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button>subscribe</button>
      </div>
    )

  }
}
export default Message
