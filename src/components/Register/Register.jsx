import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    // useState and useContext
    const [toggleEye, setToggleEye] = useState(false)
    const {createUser} = useContext(AuthContext);
    // console.log(createUser);

    // handleRegister function
    const handleRegister = e => {
        e.preventDefault();

        // input field 
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={toggleEye ? "text" : "password"} placeholder="Password" name='password' className="w-full py-2 px-4 border border-gray-300 rounded-md input-bordered" required />
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