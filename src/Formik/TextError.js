import React from 'react';

const TextError = (props) => {
    return (
        <div className='componentError'>{props.children}</div>
    );
};

export default TextError;