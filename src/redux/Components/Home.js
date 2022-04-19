import React from 'react';
import Image from '../logo.svg'
function Header(props) {
    return (
        <>
            <div className="card">
                <img src={Image} alt="Denim Jeans" style={{width:'100%'}} />
                <h1>Tailored Jeans</h1>
                <p className="price">$19.99</p>
                <p>Some text about the jeans..</p>
                <p><button onClick={()=>props.addToCartHandler({price:1000,name:'abc xyz'})}>Add to Cart</button></p>
                <p><button onClick={()=>props.removeToCartHandler()}>Remove to Cart</button></p>
            </div>
        </>
    );
}

export default Header;