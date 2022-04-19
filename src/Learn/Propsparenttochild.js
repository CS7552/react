import React from 'react';

function App(props) {
    return (
        <div>
            <Propsparenttochild name="chintan">dummy content also we can pass html</Propsparenttochild>
        </div>
    );
}

export default App;

import React from 'react';

function Propsparenttochild(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Propsparenttochild;