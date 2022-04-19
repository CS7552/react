import React, { Component } from "react";

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }
  render() {
    console.warn('stock');
    return (
      <>
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
        <button type="button" onClick={() => this.setState({ count: 1 })}>click here</button>
      </>
    )
  }
}

export default Stock;