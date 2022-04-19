import React,{useState} from 'react';
import ChildCompo from './Childcomponent';
import './App.css';

function App(){
    console.log('1');
    const [data,setData] = useState(0);
    return(
        <>
            <h1>Get Api</h1>
            <h1>{data}</h1>
            <ChildCompo data={data}/>
            <button type="button" onClick={()=>setData(data+1)}>click here</button>
        </>
    )
}


export default App;



import React,{useEffect,useRef} from "react";
function ChildCompo(props){
    let lastValue = useRef();
    useEffect(()=>{
        lastValue.current = props.data
    });
    var previousData = lastValue.current
    return (
        <>
            <h1>{previousData}</h1>
        </>
    );
}
export default ChildCompo;