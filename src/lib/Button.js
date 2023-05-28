import React from 'react'
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
    // Used classNames npm package for creating a string for the className of button element.
    const finalClassName = classNames('border-2', 'm-5', 'py-2', 'px-5', {
        'bg-blue-500 border-blue-600 text-white': primary,
        'bg-purple-500 border-purple-600 text-white': secondary,
        'bg-green-500 border-green-600 text-white': success,
        'bg-yellow-500 border-yellow-600 text-white': warning,
        'bg-red-500 border-red-600 text-white': danger,
        'rounded-full': rounded,
        'border-3.5 text-black bg-white ': outlined,
    })

    return (
        <div>
            <button className={finalClassName}>{children}</button>
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