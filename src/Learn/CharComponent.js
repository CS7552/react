import React from 'react';

const CharComponent = (props) => {
    const separetesChar = props.char.split("").map((ch,i) => {
        return <p className='style' onClick={(e) => props.removeChar(i)} key={i}>{ch}</p>;
    });
    return (
        <div>
            {separetesChar}
        </div>
    );
}

export default CharComponent;
// import React, { Component } from 'react';
// import './App.css';
// // import {Button} from 'react-bootstrap'
// // import Header from './Header'
// import Validation from "./Validation";
// import Char from "./CharComponent";
// class App extends Component {
//     state = {
//         textValue:"",
//         textLength:null
//     }
//     changeText = (e) => {
//         this.setState({
//             textValue:e.target.value,
//             textLength:e.target.value.length
//         });
//         console.log(this.state);
//     }
//     removeCharHandler = (i) => {
//         const text = this.state.textValue.split('');
//         text.splice(i,1);
//         // console.log(text);
//         // console.log(i);
//         const updatedText = text.join('');
//         this.setState({textValue:updatedText})
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" value={this.state.textValue} onChange={(e) => this.changeText(e)} />
//                 <Validation char={this.state.textValue} length={this.state.textLength} />
//                 <Char char={this.state.textValue} removeChar={this.removeCharHandler}/>
//             </div>
//         )
//     }
// }

// export default App;