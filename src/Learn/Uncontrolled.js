import React, { createRef, useRef } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import StockMarket from './Stock';
import './App.css';

function App(){
    let inputRef = useRef(null);
    function submitform(e){
        e.preventDefault();
        console.warn('------');
        console.warn('useref'+inputRef.current.value);
        console.warn('------');
        let abc = document.getElementById('abc').value;
        console.warn(abc);
        console.warn('------');
        // inputRef.current.style.display='none';
    }
    return(
        <>
            <h1>useRef in reactjs</h1>
            <form onClick={submitform}>
                <input type="text" ref={inputRef} />
                <input type="text" id="abc" />
                <button>Click here</button>
            </form>
        </>
    )
}

export default App;