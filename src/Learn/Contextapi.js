import React,{useState} from 'react';
import { CommonContext } from './components/CommomContext';
import Updatebutton from './components/Updatebutton';
import Main from './components/Main';
import Maintwo from './components/Maintwo';
import './App.css';

function App(){
    const [colorName,setColor] = useState({
        color:'green',
        updatedColor:updatedColor
    });
    function updatedColor(req){
        setColor({...colorName,color:req});
    }
    return(
        <>
            <h1>Get Api</h1>
            <CommonContext.Provider value={colorName}>
                <h1>CommonContext {colorName.color}</h1>
                <Main/>
                <Maintwo/>
                <Updatebutton/>
            </CommonContext.Provider>
        </>
    )
}


export default App;