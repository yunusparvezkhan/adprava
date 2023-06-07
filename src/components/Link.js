import React, { useContext } from 'react'
import NavigationContext from '../context/navigation';

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

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