// import React from 'react';
// import StockMarket from './Stock';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import './App.css';

function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/messages" element={<Messages/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}


export default App;

import React from 'react';
// import StockMarket from './Stock';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import './App.css';

function App(){
    return(
        <>
            <Router>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/messages">messages</Link>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/messages" element={<Messages/>}></Route>
                </Routes>
            </Router>
        </>
    )
}


export default App;

import React from 'react';
// import StockMarket from './Stock';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import Nav from './Nav'
import Pagenotfound from './Pagenotfound'
import './App.css';

function App(){
    return(
        <>

        <Nav/>
                <Routes>
                    <Route path="/" exact={true} element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/messages" element={<Messages/>}></Route>
                    <Route path="*" element={<Pagenotfound/>}></Route>
                </Routes>
        </>
    )
}


export default App;