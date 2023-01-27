import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';

const Main = () => {
    return (
        <div className=''>
            {/* <Header></Header> */}
            <div className='grid lg:grid-cols-12 gap-6 container mx-auto px-6 py-6'>
                <div className='col-span-2 border-r'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-span-7'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;