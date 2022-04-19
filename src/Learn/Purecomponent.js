import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import StockMarket from './Stock';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.warn('app');
        return (
            <>
                <p>{this.state.count}</p>
                <button type="button" onClick={() => this.setState({ count: 1 })}></button>
                <Header headingTitle="Stock Market Analysis" />
                <StockMarket name="chintan"/>
                <Footer footerleft="CopyRights" />
            </>
        )
    }
}
export default App;

//stck.js

import React, { PureComponent } from "react";

class Stock extends PureComponent {
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