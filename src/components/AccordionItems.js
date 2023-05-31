import React from 'react'
import { MdQuestionAnswer } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const AccordionItems = ({ q, a }) => {
    return (
        <div className='ml-20 mt-7'>
            <div className='flex items-center'>
                <HiQuestionMarkCircle className='mr-2' />
                <h3 className='text-xl font-medium'>{q}</h3>
            </div>
            <div className='flex items-center'>
                <MdQuestionAnswer className='mr-2' />
                <p className='text'>{a}</p>
            </div>
        </div>
    )
}

export default AccordionItems