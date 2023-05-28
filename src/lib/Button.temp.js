import React, { useState, useEffect } from 'react'
import classNames from 'classnames';


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
    // These states & variables are not of use after this commit (v1 Delta 1.11). For more information read line 40. ---------
    const [btncolor, setBtncolor] = useState('');                                                               //  x
    const [btnroundness, setBtnroundness] = useState('');                                                      //   x
    const [btnoutline, setBtnoutline] = useState('');                                                         //    x
    let dummyvar = false;                                                                                    //     x
    //                                                                                                      //      x
    //-------------------------------------------------------------------------------------------------------


    // Used classNames npm package for creating a string for the className of button element.
    const finalClassName = classNames({
        'bg-blue-500 border-blue-600': primary,
        'bg-purple-500 border-purple-600': secondary,
        'bg-green-500 border-green-600': success,
        'bg-yellow-500 border-yellow-600': warning,
        'bg-red-500 border-red-600': danger,
        'rounded-full': rounded,
        'border-2': outlined,
        'text-white': true,
        'm-5': true,
        'py-2': true,
        'px-5': true,
    })


    // The className logic previously achived in this manner using the useEffect() func and state system.
    // ----------------- This code is not in charge after this commit (v1 Delta 1.11) ---------------------
    useEffect(() => {                                                                                     //    x
        primary === true ? setBtncolor('blue') : dummyvar = !dummyvar;                                   //     x
        secondary === true ? setBtncolor('purple') : dummyvar = !dummyvar;                              //      x   
        success === true ? setBtncolor('green') : dummyvar = !dummyvar;                                //       x
        warning === true ? setBtncolor('yellow') : dummyvar = !dummyvar;                              //        x
        danger === true ? setBtncolor('red') : dummyvar = !dummyvar;                                 //         x
        outlined === true ? setBtnoutline('border-2') : dummyvar = !dummyvar;                       //          x
        rounded === true ? setBtnroundness('rounded-full') : dummyvar = !dummyvar;                 //           x
    }, []);                                                                                       //            x
    // --------------------------------------------------------------------------------------------------------

    return (
        <div>
            <button className={finalClassName}>{children}</button>

            {/* This was the button className logic used previously for the useEffect and State method, mentioned in line 40 ------------------------------------               */}
            {/* <button className={` ${btnroundness} bg-${btncolor}-500 ${btnoutline} border-${btncolor}-600 text-white m-5 py-2 px-5`}>{children}</button>   ||    x           */}
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------               */}
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