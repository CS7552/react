import React, { Component } from 'react';

class ClassComponent extends Component {
    state = {
        person : [
            {name : "chintan", age : 25},
            {name : "smita", age : 27},
            {name : "ashish", age : 28},
        ]
    }

    switchNameHandler = (name) => {
        console.log('------click event start------');
        this.setState({
            person : [
                {name : `${name} shingala`, age : '25 year'},
                {name : "smita shingala", age : '27 year'},
                {name : "ashish shingala", age : '28 year'},
            ]
        })
        console.log('------click event end------');
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.person[0].name}</td>
                            <td>{this.state.person[0].age}</td>
                        </tr>
                        <tr>
                            <td>{this.state.person[1].name}</td>
                            <td>{this.state.person[1].age}</td>
                        </tr>
                        <tr>
                            <td>{this.state.person[2].name}</td>
                            <td>{this.state.person[2].age}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><button onClick={() => this.switchNameHandler('chintan123')}>Change Name using arrow fun</button></td>
                            <td><button onClick={this.switchNameHandler.bind(this,'chintan123')}>Change Name using bind</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default ClassComponent;