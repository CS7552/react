import React from 'react';

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.deleteEvent}>Name :- {props.name}</p>
            <p>Age :- {props.age}</p>
            <input type="text" onChange={props.changeEvent} value={props.name}/>
        </div>
    );
}

export default Person;
//app
// import React, { Component } from 'react';
// import './App.css';
// import Person from "./Person";
// class App extends Component {
//     state = {
//         persons : [
//             {id:0,name:"chintan",age:25},
//             {id:2,name:"ankit",age:26},
//             {id:3,name:"rahul",age:27},
//         ],
//         otherState:"some other value",
//         showPersons:false
//     }
    
//     nameChangeHandler = (e,id) => {
//         const personsIndex = this.state.persons.findIndex(p => {
//                 return p.id === id;
//         });
        
//         console.log('aaa');
//         const person = {
//             ...this.state.persons[personsIndex]
//         }
//         console.log(person);
//         console.log('ssssss');
        
//         person.name = e.target.value;
//         console.log(person);
//         console.log('lllll');
//         const persons = [...this.state.persons];
//         persons[personsIndex] = person;

//         this.setState({persons:persons}); 
//     }    

//     deletePersonHandler = (i) => {
//         const persons = this.state.persons;
//         persons.splice(i,1);
//         this.setState({Persons:persons})
//     }

//     togglePersonHandler = () => {
//         const doesShow = this.state.ShowPersons;
//         this.setState({showPersons:!doesShow})
//     }

//     render() {
//         // console.log(this.state.name);
//         const style = {
//             backgroundColor:'white',
//             font:'inherit',
//             border:"1px solid blue",
//             padding:"8px",
//             cursor:"pointer" 
//         }
//         let persons = null;
        
//         if(this.state.showPersons){
//             persons = (
//                 <div>
//                 <p>k</p>
//                     {this.state.persons.map((person,i) => {
//                         return <Person key={person.id} name={person.name} age={person.age} 
//                         changeEvent={(e) => this.nameChangeHandler(e,person.id)} 
//                         deleteEvent={() => this.deletePersonHandler(i)}/>
//                     })}
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <button style={style} onClick={this.togglePersonHandler}>display data</button>
//                 {persons}
//             </div>
//         );
//     }
// }

// export default App;