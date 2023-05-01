/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <img className='w-24' src={logo} alt="" />
            <div className='flex gap-16 mt-14 items-center'>
                <div className="relative text-white">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input type="text" className="py-2 text-sm  bg-transparent rounded-md pr-4 border pl-10" placeholder="Search Your Destination..."  />
                </div>
                <div className='flex items-center font-semibold justify-center gap-4 text-white'>
                    <a>News</a>
                    <a>Destination</a>
                    <a>Blog</a>
                    <a>Contact</a>
                    <button className='text-black bg-yellow-500 rounded-md px-6 py-2 hover:text-white border-none'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;