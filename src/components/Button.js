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
    rounded,
    ...rest
}) => {
    // Used classNames npm package for creating a string for the className of button element.
    const finalClassName = classNames('border-2', 'm-5', 'py-2', 'px-5', 'flex items-center', {
        'border-black text-gray-900': !primary && !secondary && !success && !warning && !danger,
        'text-gray-100': !outlined,
        'bg-blue-500 border-blue-600': primary,
        'bg-purple-500 border-purple-600': secondary,
        'bg-green-500 border-green-600': success,
        'bg-yellow-500 border-yellow-600': warning,
        'bg-red-500 border-red-600': danger,
        'rounded-full': rounded,
        'border-3.5 bg-white ': outlined,
        'text-blue-500': outlined && primary,
        'text-purple-500': outlined && secondary,
        'text-green-500': outlined && success,
        'text-yellow-500': outlined && warning,
        'text-red-500': outlined && danger,
    }, rest.className)

    return (
        <div>
            <button {...rest} className={finalClassName}>{children}</button>
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
        if (sumnum > 1) {
            return new Error("Please provide only one button type as a prop on the Button jsx element");
        };
    }
}

export default Button;