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
    const [btnroundness, setBtnroundness] = useState('');
    const [btnoutline, setBtnoutline] = useState('');
    let dummyvar = false;

    useEffect(() => {
        primary === true ? setBtntype('bg-blue-500 text-white m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        secondary === true ? setBtntype('bg-purple-700 text-white m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        success === true ? setBtntype('bg-green-600 text-white m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        warning === true ? setBtntype('bg-yellow-500 text-white m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        danger === true ? setBtntype('bg-red-400 text-white m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        outlined === true ? setBtnoutline('border-2 border-blue-800 text-black m-5 py-2 px-5 ') : dummyvar = !dummyvar;
        rounded === true ? setBtnroundness('rounded-full ') : dummyvar = !dummyvar;
    }, []);
    return (
        <div>
            <button className={btntype + btnoutline + btnroundness}>{children}</button>
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