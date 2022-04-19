import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummery = (props) => {
    const Navigate = useNavigate();
    return (
        <div>
            <p>order confirmed!</p>
            <button onClick={() => Navigate(-1)}>Back</button>
        </div>
    );
}

export default OrderSummery;