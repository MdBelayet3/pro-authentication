import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-2xl'>My personal Information</h2>
            {user && <div>
                <p>{user.email}</p>
                <p>{user.displayName}</p>
            </div>}
        </div>
    );
};

export default Profile;