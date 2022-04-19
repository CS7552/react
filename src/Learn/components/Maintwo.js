import React from 'react';
import {CommonContext} from './CommomContext';
function Maintwo(){
    return (
        <CommonContext.Consumer>
            {({color,updatedColor}) => (
                <>
                        <h1 style={{backgroundColor: color}}>Maintwo</h1>
                        <button onClick={()=>updatedColor('red')}>red</button>
                </>
            )}
        </CommonContext.Consumer>
    )
}

export default Maintwo;