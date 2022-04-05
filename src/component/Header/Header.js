import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-container drop-shadow-lg '>
            <div className='link-container flex justify-center gap-16 py-5 text-2xl text-lime-700'>
                <Link to="/home"></Link>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;