import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { MdQuestionAnswer } from 'react-icons/md';

const Accordion = ({ qnadata }) => {
    const renderData = () => {
        return qnadata.map(({ q, a }) => {
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
        })
    }

    return (
        <div>
            <h1 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Accordion</h1>
            <div>
                {renderData()}
            </div>
        </div>
    )
}

export default Accordion