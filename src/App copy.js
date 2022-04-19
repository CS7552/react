import React from 'react';
import ReactDOM from 'react-dom';
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