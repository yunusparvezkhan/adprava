import React, { useEffect } from 'react';
import adpravaLogo from '../media/icons/gold-medal.png';
import Link from './Link';
import useNavigation from '../hooks/navigationHook';
import '../styles/stylelib.css';

const NavBar = () => {
    const { currentPath } = useNavigation();

    const links = [
        {
            label: 'Accordion',
            path: '/Accordion',
            secondaryPath: '/'
        },
        {
            label: 'Dropdown',
            path: '/Dropdown',
            secondaryPath: ''
        },
        {
            label: 'Button',
            path: '/Button',
            secondaryPath: ''
        },

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
                <img src={adpravaLogo} className='pl-20' />
                <h1 className='text-5xl font-semibold text-gray-100 py-5 pl-2' >Adprava</h1>
                <div className='navbar-button-cont flex text-white ' >

                    {/* This Link render logic was used up until this point. But now we have created new array of objects called links in line 10. And then
                            mapping that in line 37, where we used the Link component. By doing this repeated code is avoided.                                          */}
                    {/* -------------------------------------------------------------------------------------------------------------------------------------// 
                    <Link className={stylesfunc('/Accordion') + stylesfunc('/')} to='/Accordion' >Accordion</Link>                                          //      
                    <Link className={stylesfunc('/Dropdown')} to='/Dropdown' >Dropdown</Link>                                                              //
                    <Link className={stylesfunc('/Button')} to='/Button' >Buttons</Link>                                                                  //            */}
                    {/* ---------------------------------------------------------------------------------------------------------------------------------//             */}


                    {/* The value from the map function is being rendered here */}
                    {/* ----------------------------------------------------------- //     */}
                    {renderLinks}                                           {/*    //      */}            {/*   <---   NEW LOGIC HERE       */}
                    {/* ----------------------------------------------------------//       */}


                </div>
            </div>
        </div >
    )
}

export default NavBar