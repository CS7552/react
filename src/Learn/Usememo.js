import React, { useState,useMemo } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import StockMarket from './Stock';
import './App.css';

function App (){
    const [count,countState] = useState(0);
    const [item,itemState] = useState(0);
    const multiple = useMemo(function multiplyFun(){
        console.log('sds');
        return count*2;
    },[count]);
    return (
        <>
            <p>{multiple}</p>
            <p>{count}</p>
            <button type="button" onClick={() => countState(count + 1)}>count</button>
            <p>{item}</p>
            <button type="button" onClick={() => itemState(item + 1)}>item</button>
            <StockMarket name="chintan" />
        </>
    )
}
export default App;