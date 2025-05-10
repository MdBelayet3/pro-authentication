import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {

    const {name} = useContext(AuthContext);

    return (
        <div>
            <h2>This is Home section</h2>
            <p>{name}</p>
        </div>
    );
};

export default Home;