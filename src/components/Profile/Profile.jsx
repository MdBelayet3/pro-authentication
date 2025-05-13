import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-2xl'>My personal Information</h2>
            {user && <p>
                {user.email}
            </p>}
        </div>
    );
};

export default Profile;