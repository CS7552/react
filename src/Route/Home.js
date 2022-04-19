import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const Navigate = useNavigate();
    return (
        <div>
            <p>Home</p>
            <button onClick={() => Navigate('order-summery',{replace:true})}>Place order</button>
        </div>
    );
}

export default Home;