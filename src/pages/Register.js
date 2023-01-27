import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            name,
            email,
            password
        }
        getAccessToken(email)
    }


    const getAccessToken = (email) => {
        fetch(`https://computer-zone-server.vercel.app/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem("access-token", data.accessToken);
                    // navigate(from, { replace: true });
                }
            });
    };

    return (
        <div className='w-[500px] mx-auto border rounded-md shadow p-6'>
            <h2 className='text-center text-3xl font-semibold py-6'>Create An Account</h2>
            <form onSubmit={handleRegister}>
                <div className='mb-2'>
                    <p className='font-medium text-left mb-1'>Your name</p>
                    <input
                        type="text"
                        name='name'
                        className='w-full py-1 px-4 border rounded-md outline-none'
                        placeholder='Enter your name'
                    />
                </div>
                <div className='mb-2'>
                    <p className='font-medium text-left mb-1'>Email</p>
                    <input
                        type="email"
                        name='email'
                        className='w-full py-1 px-4 border rounded-md outline-none'
                        placeholder='Enter email address'
                    />
                </div>
                <div className='mb-2'>
                    <p className='font-medium text-left mb-1'>Image</p>
                    <input
                        type="file"
                        name='image'
                        className='w-full border rounded-md outline-none'
                        placeholder='Enter email address'
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
                    <button type="submit" className='bg-cyan-500 px-8 py-2 rounded-md font-medium text-white'>Register</button>
                </div>
            </form>
            <div>
                <p >If already have an account <Link className='text-blue-600 hover:underline' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;