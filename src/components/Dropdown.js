import React, { useState } from 'react'

const Dropdown = ({ DropDownOptions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuhider, setMenuhider] = useState(true);
    const renderMenu = DropDownOptions.map((option) => {
        return (
            <div onClick={() => { setSelectedOption(option); setMenuhider(true) }} className='py-2 px-2 block' >
                <label className='text-base cursor-pointer' >{option.q}</label>
            </div>
        )
    })
    return (
        <div className='ml-20 mt-10 w-1/3 bg-gray-100 ' >
            <div>
                <div className='text-3xl font-bold cursor-pointer' onClick={() => setMenuhider(!menuhider)} >
                    {selectedOption ? selectedOption.q : 'Select'}
                </div>
                <div className={menuhider === false ? '' : 'hidden'}>
                    {renderMenu}
                </div>
            </div>
        </div>
    )
}

export default Dropdown