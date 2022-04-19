import React from 'react';

const Assignmentsol = (props) => {
    // console.log(props.name);
    return (
        <div>
            <input type="text" name="name" id="name" onChange={props.changeEvent} value={props.name}/>
        </div>
    );
}

export default Assignmentsol;

//app
import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
// import Header from './Header'
import Sol from './Sol';
import Assigment from './Assignmentsol';

class App extends Component {
    state = {
        name:"chintan"
    }

    namechangeHandler = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    render() {
        // console.log(this.state.name);
        return (
            <div>
                <Assigment changeEvent={this.namechangeHandler} name={this.state.name}/>
                <Sol name={this.state.name} />
            </div>
        );
    }
}

export default App;