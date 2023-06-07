import React, { useContext } from 'react';
import adpravaLogo from '../media/icons/gold-medal.png';
import Link from './Link';
import '../styles/stylelib.css';



const NavBar = () => {
    return (
        <div>
            <div className="bg-gray-800 flex items-center">
                <img src={adpravaLogo} className='pl-20' />
                <h1 className='text-5xl font-semibold text-gray-100 py-5 pl-2' >Adprava</h1>
                <div className='navbar-button-cont flex text-white ' >
                    <Link to='/Accordion' >Accordion</Link>
                    <Link to='/Dropdown' >Dropdown</Link>
                    <Link to='/Button' >Buttons</Link>
                </div>
            </div>
        </div >
    )
}

export default NavBar