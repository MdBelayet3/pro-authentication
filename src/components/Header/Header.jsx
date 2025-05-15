import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    // useContext for get value from AuthContext
    const { user, logOut } = useContext(AuthContext)
    console.log(logOut)
    console.log(user)

    // navLink
    const navLink = <>
        <li><NavLink className="text-xl" to="/">Home</NavLink></li>
        <li><NavLink className="text-xl" to="/login">Login</NavLink></li>
        <li><NavLink className="text-xl" to="/gptLogin">GptLogin</NavLink></li>
        <li><NavLink className="text-xl" to="/register">Register</NavLink></li>
        <li><NavLink className="text-xl" to="/orders">Orders</NavLink></li>
        {
            user && <>
                <li><NavLink className="text-xl" to="/profile">Profile</NavLink></li>
                <li><NavLink className="text-xl" to="/dashboard">Dashboard</NavLink></li>
            </>
        }
    </>

    // handleLogOut function
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log("Log out done successfully"))
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <div className='flex gap-3 items-center'>
                            <p className=''>{user.email}</p>
                            <button onClick={handleLogOut} className="btn btn-accent text-white">Log Out</button>
                        </div>
                        : <Link className='btn btn-neutral' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;