import React from 'react';
// import StockMarket from './Stock';
import {Routes,Route, Link} from 'react-router-dom';
import User from './Users'
import './App.css';

function App(){
    let users = [
        {'id':1,'name':'chintan','age':25,'educated':true},
        {'id':2,'name':'smita','age':27,'educated':true},
        {'id':3,'name':'ashish','age':28,'educated':true},
        {'id':4,'name':'gita','age':31,'educated':true},
    ];
    return(
        <>
            <h1>dynamic route</h1>
            {users.map((Item)=>
                <div>
                    <Link key={Item.id} to={`/user/${Item.id}/${Item.name}/${Item.age}/${Item.educated}`} ><p>{Item.name}</p></Link>
                </div>
            )}
            <Routes>
                <Route path='/user/:id/:name/:age/:educated' element={<User/>}></Route>
            </Routes>
        </>
    )
}


export default App;