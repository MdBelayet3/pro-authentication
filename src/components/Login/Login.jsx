import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router';

const Login = () => {

    // useState and useContext useNavigate hook
    const [toggleEye, setToggleEye] = useState(false)
    const { signInUser, googleLogIn } = useContext(AuthContext);
    // console.log(signInUser);
    const navigate = useNavigate();

    // handleLogin function
    const handleLogin = e => {
        e.preventDefault();

        // input field 
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // signInUser function
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
        e.target.reset();
        navigate('/')
    }

    // handleGoogleLogIn function
    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
        navigate('/')
    }

    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={toggleEye ? "text" : "password"} placeholder="password" name='password' className="w-full py-2 px-4 border border-gray-300 rounded-md input-bordered" required />
                                <div onClick={() => setToggleEye(!toggleEye)} className='absolute top-[20%] text-2xl right-[10%]'>{toggleEye ? <IoEyeOff /> : <IoEye />}    </div>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-5 mb-4'>New? Please <a href='/register' className='btn btn-secondary'>Register</a></p>
                    <button onClick={handleGoogleLogIn} className='btn btn-accent my-3 mx-5'>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;