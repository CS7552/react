import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Products = (props) => {
    return (
        <>
            <div>
                <input type="search" name="products" id="products" />
            </div>
            <nav>
                <Link to="featureproduct">Featured</Link>
                <Link to="newproduct">New</Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Products;