import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>My Review</h1>
        </div>
    );
};

export default MyReview;