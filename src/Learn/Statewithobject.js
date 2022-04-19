import React,{useState} from 'react';
import './App.css';

function App(){
    console.log('1');
    const [data,setData] = useState({name:'chintan',age:24,gender:'male'});
    return(
        <>
            <h1>Get Api</h1>
            <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/><h1>{data.name}</h1>
            <input type="text" value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/><h1>{data.age}</h1>
            <input type="text" value={data.gender} onChange={(e)=>setData({...data,gender:e.target.value})}/><h1>{data.gender}</h1>
        </>
    )
}


export default App;

// https://jsonplaceholder.typicode.com/photos