import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

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
    const [btntype, setBtntype] = useState('');

    useEffect(() => {
        primary === true ? setBtntype('rounded-none') : setBtntype('');
    }, []);
    return (
        <div>
            <button className={"bg-purple-700 text-white block text-sm my-5 py-2 px-5 rounded-full"}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger
    }) => {
        const sumnum = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);
        if (sumnum === 1) {
            return;
        } else if (sumnum === 0) {
            return new Error("Please provide the type of button as a prop on the Button jsx element");
        } else {
            return new Error("Please provide only one button type as a prop on the Button jsx element");
        };
    }
}

export default Button;