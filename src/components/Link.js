import React from 'react'
import useNavigation from '../hooks/navigationHook';

const Link = ({ to, children }) => {
    const { navigate } = useNavigation;

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <div className='mx-1 px-3 py-2 hover:bg-blue-900 transition duraiton-100 cursor-pointer ' >
            <a href={to} onClick={handleClick} >{children}</a>
        </div>
    )
}

export default Link