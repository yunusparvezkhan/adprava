import React from 'react'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded
}) => {
    return (
        <div>
            <button>{children}</button>
        </div>
    )
}

export default Button;