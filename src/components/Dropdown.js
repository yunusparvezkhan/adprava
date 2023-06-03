import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const Dropdown = ({ DropDownOptions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuhider, setMenuhider] = useState(true);

    const renderMenu = DropDownOptions.map((option) => {
        return (
            <div onClick={() => { setSelectedOption(option); setMenuhider(true) }} className='py-2 block flex items-center' >
                <MdOutlineCheckBoxOutlineBlank className={selectedOption === option ? 'hidden' : 'mr-2'} />
                <MdOutlineCheckBox className={selectedOption === option ? 'mr-2' : 'hidden'} />
                <label className='text-base cursor-pointer' >{option.q}</label>
            </div>
        )
    })
    return (
        <div className='ml-20 mt-10 w-1/3 bg-gray-100 '>
            <div>
                <div className='text-3xl font-bold cursor-pointer flex items-center' onClick={() => setMenuhider(!menuhider)} >
                    <div className='flex-1 py-2'>
                        {selectedOption ? selectedOption.q : 'Select'}
                    </div>
                    <MdExpandMore className={menuhider === true ? 'flex-2' : 'hidden'} />
                    <MdExpandLess className={menuhider === false ? 'flex-2' : 'hidden'} />
                </div>
                <div className={menuhider === false ? '' : 'hidden'}>
                    {renderMenu}
                </div>
            </div>
        </div>
    )
}

export default Dropdown