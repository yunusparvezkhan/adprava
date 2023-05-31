import React, { useState } from 'react'
import { MdQuestionAnswer, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const AccordionItem = ({ q, a }) => {
    const [AccordionSts, setAccordionSts] = useState(false);
    const [DownIcon, setDownIcon] = useState('');
    const [UpIcon, setUpIcon] = useState('hidden');
    const handleExpandIconClick = () => {
        if (AccordionSts === false) {
            setDownIcon('hidden');
            setUpIcon('');
            setAccordionSts(true);
        } else if (AccordionSts === true) {
            setDownIcon('');
            setUpIcon('hidden');
            setAccordionSts(false);
        }
    }
    return (
        <div className='ml-20 mt-7 cursor-pointer' onClick={handleExpandIconClick}>
            <div className='flex items-center'>
                <HiQuestionMarkCircle className='mr-2' />
                <h3 style={{ userSelect: 'none' }} className='text-xl font-medium'>{q}</h3>
                <MdExpandMore className={'ml-2 text-2xl ' + DownIcon} />
                <MdExpandLess className={'ml-2 text-2xl ' + UpIcon} />
            </div>
            <div className={'flex items-center ' + UpIcon}>
                <MdQuestionAnswer className='mr-2' />
                <p className={'text'}>{a}</p>
            </div>
        </div>
    )
}

export default AccordionItem;