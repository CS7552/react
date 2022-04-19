import React from 'react';

function Validation(props) {

    let validationText = null;
    if(props.length <= 5){
        validationText = (
            <div>
                <p>Tesx is shortthan 5 char.</p>
            </div>
        )
    }
    return (
        <div>
            {validationText}
        </div>
    );
}

export default Validation;