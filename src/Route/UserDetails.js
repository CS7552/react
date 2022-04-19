import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userid} = useParams();
    return (
        <div>
            <p>User id is {userid}</p>      
        </div>
    );
}

export default UserDetails;