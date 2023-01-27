import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";

const LeftSideBar = () => {
    return (
        <div>
            <Link to="/" className='py-2 flex items-center gap-1 w-full'>
                <AiOutlineHome></AiOutlineHome>
                <span>Home</span>
            </Link>
            <Link to="/login" className='py-2 flex items-center gap-1 w-full'>
                <MdAccountCircle></MdAccountCircle>
                <span>Login</span>
            </Link>

        </div>
    );
};

export default LeftSideBar;