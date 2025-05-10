import React, { createContext } from 'react';
import PropTypes from 'prop-types';

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {name: "shagor nodi khal bil"}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;