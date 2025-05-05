import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {

    // useState
    const [toggleEye, setToggleEye] = useState(false)

    // handleRegister function
    const handleRegister = e => {
        e.preventDefault();

        // input field 
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
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
                                <div onClick={() => setToggleEye(!toggleEye)} className='absolute top-[20%] text-2xl right-[10%]'>{toggleEye? <IoEyeOff/> : <IoEye/>}    </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <p className='ml-5 mb-4'>Have an account? Please <a href='/login' className='btn btn-primary'>Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;