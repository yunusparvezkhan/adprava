import React, { useState } from 'react'
import { MdQuestionAnswer, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const AccordionItem = ({ activateItem, activeitem, id, q, a }) => {
    const [AccordionSts, setAccordionSts] = useState(id === activeitem ? true : false);
    const [DownIcon, setDownIcon] = useState('');
    const [UpIcon, setUpIcon] = useState('hidden');
    const handleExpandIconClick = () => {
        if (activeitem === id) {
            setDownIcon('hidden');
            setUpIcon('');
            activateItem(null);
        } else {
            setDownIcon('');
            setUpIcon('hidden');
            activateItem(id);
        }
    }


    const renderItem = () => {
        if (activeitem === id) {
            return (
                <div>
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
        } else {
            return (
                <div className='flex items-center'>
                    <HiQuestionMarkCircle className='mr-2' />
                    <h3 style={{ userSelect: 'none' }} className='text-xl font-medium'>{q}</h3>
                    <MdExpandMore className={'ml-2 text-2xl ' + DownIcon} />
                    <MdExpandLess className={'ml-2 text-2xl ' + UpIcon} />
                </div>
            )
        }
    }

    return (
        <div className='ml-20 mt-7 cursor-pointer' onClick={handleExpandIconClick}>
            {/* <div className='flex items-center'>
                <HiQuestionMarkCircle className='mr-2' />
                <h3 style={{ userSelect: 'none' }} className='text-xl font-medium'>{q}</h3>
                <MdExpandMore className={'ml-2 text-2xl ' + DownIcon} />
                <MdExpandLess className={'ml-2 text-2xl ' + UpIcon} />
            </div>
            <div className={'flex items-center ' + UpIcon}>
                <MdQuestionAnswer className='mr-2' />
                <p className={'text'}>{a}</p>
            </div> */}
            {renderItem()}
        </div>
    )
}

export default AccordionItem;