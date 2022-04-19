import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import StockMarket from './Stock';
import './App.css';

function App(){
    return(
        <>
            <h1>useRef in reactjs</h1>
            <HOC cstmcomponent={SubApp} />
        </>
    )
}

function HOC(props){
    return(
        <>
            <props.cstmcomponent/>
        </>
    );
}

function SubApp(){
    let [name,setName] = useState('chintan');
    let [con,setCon] = useState(false);
    return(
        <>
            <h1>{(con===true)?name:null}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button type='button' onClick={()=>setCon(true)}>Click here</button>
        </>
    )
}

export default App;