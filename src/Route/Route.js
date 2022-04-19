import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Nav from './Nav'
import OrderSummery from './OrderSummery'
import PageNotFound from './PageNotFound'
import Products from './Products'
import FeatureProduct from './FeatureProduct'
import NewProduct from './NewProduct'
import UserDetails from './UserDetails'
import Users from './Users'
import Admin from './Admin'
import Loading from './Loading'
const LazyLoading = React.lazy(()=>import('./Loading'))

const Routing = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="loading" element={<React.Suspense fallback={'Loading...'}><LazyLoading/></React.Suspense>} />
                <Route path="order-summery" element={<OrderSummery/>} />
                <Route path="products" element={<Products/>}>
                <Route index element={<FeatureProduct/>}/>
                    <Route path='featureproduct' element={<FeatureProduct/>}/>
                    <Route path='newproduct' element={<NewProduct/>}/>
                </Route>
                <Route path='user' element={<Users/>}>
                    <Route path=':userid' element={<UserDetails/>}/>
                    <Route path='admin' element={<Admin/>}/>
                </Route>
                    <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
};

export default Routing;