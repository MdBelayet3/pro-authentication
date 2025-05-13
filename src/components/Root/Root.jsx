import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='lg:max-w-5xl mx-auto my-8 '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;