import React from 'react';
import adpravaLogo from '../media/icons/gold-medal.png';
import Button from './Button';
import '../styles/stylelib.css';


const NavBar = ({ onChange }) => {
    const onBtnClick = (path) => {
        window.history.pushState({}, '', path);
        onChange(path);
    }
    return (
        <div>
            <div className="bg-gray-800 flex items-center">
                <img src={adpravaLogo} className='pl-20' />
                <h1 className='text-5xl font-semibold text-gray-100 py-5 pl-2' >Adprava</h1>
                <div className='navbar-button-cont flex ' >
                    <Button secondary onClick={() => onBtnClick('/Accordion')} >Accordion</Button>
                    <Button secondary onClick={() => onBtnClick('/Button')}>Button</Button>
                    <Button secondary onClick={() => onBtnClick('/Dropdown')}>Dropdown</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar