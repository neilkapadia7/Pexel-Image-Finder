import React from 'react';
import Logo from '../pexels-logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
    return (
        <div id='top-section'>
            <header>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href='https://github.com/neilkapadia7' target='_blank'>GitHub Profile</a></li>
                        <li><a href='https://www.pexels.com/upload/' target='_blank' className='upload'>Upload</a></li>
                    </ul>
                </nav>                
            </header>
            <Search />
        </div>
    )
}

export default Navbar
