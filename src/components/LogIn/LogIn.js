import React from 'react';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const {logInWithGoogle} = useAuth();
    return (
        <div className="my-5 text-center">
            <h1 className="fw-bold mb-5">Please Login with Google</h1>
            <button onClick={logInWithGoogle} className="btn btn-warning text-light px-4">LogIn with Google</button>
        </div>
    );
};

export default LogIn;