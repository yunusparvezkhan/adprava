import React, { useEffect } from 'react';
import adpravaLogo from '../media/logos/AA-in-Hindi-in-blue-with-techboy.png';
import Link from './Link';
import useNavigation from '../hooks/navigationHook';
import '../styles/stylelib.css';

const NavBar = () => {
    const { currentPath } = useNavigation();

    const links = [
        {
            label: 'Dropdown',
            path: '/Dropdown',
            secondaryPath: '/'
        },
        {
            label: 'Accordion',
            path: '/Accordion',
            secondaryPath: ''
        },
        {
            label: 'Buttons',
            path: '/Buttons',
            secondaryPath: ''
        },
        {
            label: 'Modal',
            path: '/Modal',
            secondaryPath: ''
        },
        {
            label: 'Table',
            path: '/Table',
            secondaryPath: ''
        }

    ];

    const stylesfunc = (path) => {
        if (currentPath === path) {
            return 'text-green-400';
        } else {
            return '';
        }
    }

    const renderLinks = links.map((link) => {
        return (
            <div key={link.path}>
                <Link className={stylesfunc(link.path) + stylesfunc(link.secondaryPath)} to={link.path}>{link.label}</Link>
            </div>
        )
    })

    return (
        <div>
            <div className="bg-gray-800 flex items-center">
                <img src={adpravaLogo} width="150" className='pl-20 mt-2' />
                <h1 className='text-4xl font-thin text-gray-100 py-5 pl-2' style={{ letterSpacing: "5px" }}>Adprava</h1>
                <div className='navbar-button-cont flex text-white ' >
                    {renderLinks}
                </div>
            </div>
        </div >
    )
}

export default NavBar