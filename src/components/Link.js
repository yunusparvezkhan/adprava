import React from 'react'
import useNavigation from '../hooks/navigationHook';

const Link = ({ to, children, ...rest }) => {
    const { navigate } = useNavigation();

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a {...rest} href={to} onClick={handleClick} >
            <button className='mx-1 px-3 py-2 hover:bg-blue-900 transition duraiton-100 cursor-pointer'>{children}</button>
        </a>
    )
}

export default Link