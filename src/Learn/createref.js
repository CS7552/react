import React, { createRef, useRef } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import StockMarket from './Stock';
import './App.css';

function App(){
    let inputRef = createRef();
    function handleInput(){
        console.warn('------');
        inputRef.current.value='100';
        inputRef.current.style.color="red";
        inputRef.current.focus();
        // inputRef.current.style.display='none';
    }
    return(
        <>
            <h1>useRef in reactjs</h1>
            <input type="text" ref={inputRef} />
            <button type="button" onClick={handleInput}>Click here</button>
        </>
    )
}

export default App;