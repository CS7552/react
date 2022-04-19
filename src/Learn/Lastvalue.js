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