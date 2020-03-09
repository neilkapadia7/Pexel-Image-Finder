import React from 'react';
import Logo from '../pexels-logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
    return (
        <div>
            <img src={Logo} height='30px' width='100px'/>
            <Search />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Navbar
