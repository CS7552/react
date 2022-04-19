import React from 'react';
import {CommonContext} from './CommomContext';
function Updatebutton(){
    return (
        <CommonContext.Consumer>
            {({updatedColor}) => (
                <>
                    <h1>yellow</h1>
                    <button onClick={()=>updatedColor('yellow')}>yellow</button>
                </>
            )}
        </CommonContext.Consumer>
    )
}

export default Updatebutton;