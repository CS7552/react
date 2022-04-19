import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = (props) => {
    return (
        <div>
            <p>User</p> 
            <Outlet/>  
        </div>
    );
}

export default Users;