import React,{useState} from 'react';
import './App.css';

function App(){
    console.log('1');
    const [data,setData] = useState(0);
    function clickhere(){
        console.log('2');
        for (let i = 0; i < 5; i++) {
            console.log(`index${i}`);
            setData((pre)=>{ return pre+1});
        }
        console.log('4');
    }
    return(
        <>
            <h1>Get Api</h1>
            <h1>{data}</h1>
            <button type="button" onClick={clickhere}>click here</button>
        </>
    )
}


export default App;

// https://jsonplaceholder.typicode.com/photos