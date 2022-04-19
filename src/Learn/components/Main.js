import React from 'react';
import {CommonContext} from './CommomContext';
function Main(){
    return (
        <CommonContext.Consumer>
            {({color,updatedColor}) => (
                <>
                    <h1 style={{backgroundColor: color}}>main component</h1>
                    <button onClick={()=>updatedColor('green')}>green</button>
                </>
            )}
        </CommonContext.Consumer>
    )
}
export default Main;
