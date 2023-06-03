import React, { useState } from 'react'

const Dropdown = ({ DropDownOptions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const renderMenu = DropDownOptions.map((option) => {
        return (
            <div onClick={() => setSelectedOption(option)} >
                <label className='text-base cursor-pointer' >{option.q}</label>
            </div>
        )
    })
    return (
        <div className='text-2xl' >
            <div>
                <div className='text-3xl font-bold' >
                    {selectedOption ? selectedOption.q : 'Select'}
                </div>
                {renderMenu}
            </div>
        </div>
    )
}

export default Dropdown