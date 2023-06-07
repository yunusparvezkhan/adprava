import React, { useContext } from 'react'
import NavigationContext from '../context/navigation';

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();
        navigate(to);
    }

    return (
        <div className='mx-5' >
            <a onClick={handleClick} >{children}</a>
        </div>
    )
}

export default Link