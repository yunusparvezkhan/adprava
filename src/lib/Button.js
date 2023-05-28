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
        primary === true ? setBtncolor('blue') : dummyvar = !dummyvar;
        secondary === true ? setBtncolor('purple') : dummyvar = !dummyvar;
        success === true ? setBtncolor('green') : dummyvar = !dummyvar;
        warning === true ? setBtncolor('yellow') : dummyvar = !dummyvar;
        danger === true ? setBtncolor('red') : dummyvar = !dummyvar;

        outlined === true ? setBtnoutline('border-2') : dummyvar = !dummyvar;
        rounded === true ? setBtnroundness('rounded-full') : dummyvar = !dummyvar;
    }, []);
    return (
        <div>
            <button className={` ${btnroundness} bg-${btncolor}-500 ${btnoutline} border-${btncolor}-600 text-white m-5 py-2 px-5`}>{children}</button>
        </div >
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