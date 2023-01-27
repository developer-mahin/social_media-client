import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-[500px] mx-auto border rounded-md shadow p-6'>
            <h2 className='text-center text-3xl font-semibold py-6'>Login User</h2>
            <form onSubmit={handleLogin}>
                <div className='mb-2'>
                    <p className='font-medium text-left mb-1'>Email</p>
                    <input
                        type="email"
                        name='email'
                        className='w-full py-1 px-4 border rounded-md outline-none'
                        placeholder='Enter your email address'
                    />
                </div>
                <div className='mb-2'>
                    <p className='font-medium text-left mb-1'>Password</p>
                    <input
                        type="password"
                        name='password'
                        className='w-full py-1 px-4 border rounded-md outline-none'
                        placeholder='Enter your password'
                    />
                </div>
                <div className='text-left'>
                    <button type="submit" className='bg-cyan-500 px-8 py-2 rounded-md font-medium text-white'>Login</button>
                </div>
            </form>
            <div>
                <p >If you haven't account <Link className='text-blue-600 hover:underline' to="/register">Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;