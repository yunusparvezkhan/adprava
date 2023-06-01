import React, { useState } from 'react'
import { MdQuestionAnswer, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const AccordionItem = ({ activateItem, activeitem, id, q, a }) => {
    const [AccordionSts, setAccordionSts] = useState(id === activeitem ? true : false);
    const [DownIcon, setDownIcon] = useState(AccordionSts === true ? 'hidden' : '');
    const [UpIcon, setUpIcon] = useState(AccordionSts === true ? '' : 'hidden');
    const handleExpandIconClick = () => {
        if (AccordionSts === true) {
            // activateItem(null);
        } else {
            // activateItem(id);
        }
    }

    return (
        <div className='ml-20 mt-7 cursor-pointer' onClick={() => handleExpandIconClick()}>
            <div className='flex items-center'>
                <HiQuestionMarkCircle className='mr-2' />
                <h3 style={{ userSelect: 'none' }} className='text-xl font-medium'>{q + ' ' + UpIcon}</h3>
                <MdExpandMore className={'ml-2 text-2xl ' + DownIcon} />
                <MdExpandLess className={'ml-2 text-2xl ' + UpIcon} />
            </div>
            <div className={'flex items-center ' + UpIcon}>
                <MdQuestionAnswer className='mr-2' />
                <p className={'text'}>{a}</p>
            </div>
            {/* {renderItem()} */}
        </div>
    )
}

export default AccordionItem;