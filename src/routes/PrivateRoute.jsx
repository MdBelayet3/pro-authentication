import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (user) {
        return children;
    }

    if(loading){
       return <span className="loading loading-spinner loading-xl"></span>
    }

    return (
        <Navigate to="/login" ></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;