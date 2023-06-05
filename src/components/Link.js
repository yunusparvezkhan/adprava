import React from 'react'

const Link = ({ to, name }) => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log(to)
    }
    return (
        <div>
            <a href={to} onClick={handleClick}>{name}</a>
        </div>
    )
}

export default Link