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
    const [btncolor, setBtncolor] = useState('');
    const [btnroundness, setBtnroundness] = useState('');
    const [btnoutline, setBtnoutline] = useState('');
    let dummyvar = false;

    useEffect(() => {
        primary === true ? setBtncolor('blue-500') : dummyvar = !dummyvar;
        secondary === true ? setBtncolor('purple-500') : dummyvar = !dummyvar;
        success === true ? setBtncolor('green-500') : dummyvar = !dummyvar;
        warning === true ? setBtncolor('yellow-400') : dummyvar = !dummyvar;
        danger === true ? setBtncolor('red-400') : dummyvar = !dummyvar;

        outlined === true ? setBtnoutline('border-2') : dummyvar = !dummyvar;
        rounded === true ? setBtnroundness('rounded-full') : dummyvar = !dummyvar;
    }, []);
    return (
        <div>
            <button className={` ${btnroundness} bg-${btncolor} ${btnoutline} border-${btncolor.slice(0, btncolor.length - 4)}-600 text-white m-5 py-2 px-5`}>{children}</button>
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