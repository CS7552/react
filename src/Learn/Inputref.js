import React, { Component, createRef } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import StockMarket from './Stock';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            name:'chintan'
        }
        this.inputRef = createRef();
    }
    componentDidMount(){
        console.warn(this.inputRef);
    }
    chnageColor(){
        console.warn(this.inputRef);
        this.inputRef.current.style.color='white';
        this.inputRef.current.style.backgroundColor='green';
    }
    render(){
        return(
            <>
                <h1>Reactjs REF</h1>
                <input type="text" ref={this.inputRef}/>
                <button type="button" onClick={()=>this.chnageColor()}>change color</button>
            </>
        )
    }
}

export default App;