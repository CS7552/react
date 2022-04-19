import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StockMarket from './Stock';
import './App.css';

const App = () => {
    function parentchild(data){
        console.log(data);
    }
    return ( 
        <>
            <Header headingTitle = "Stock Market Analysis" />
            <StockMarket parentChild={parentchild}/>
            <Footer footerleft = "CopyRights" />
        </>
    )
}
export default App;


//stock.js
import React, { useEffect, useState } from "react";

function Stock(props) {
  const data = 'chintan'; 
  return (
    <>
      <span>add at least one stock</span>
      <button type='button' onClick={()=>props.parentChild(data)}>Submit</button>
    </>
  );
}

export default Stock;