import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';
import { MdQuestionAnswer, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi';

const Accordion = ({ qnadata }) => {
    const [activeitem, setActiveitem] = useState('');

    const handleItemActivation = (id) => {
        activeitem !== id ? setActiveitem(id) : setActiveitem(null)
    }


    const renderData = qnadata.map(({ id, q, a }) => {
        let DownIcon = activeitem === id ? 'hidden' : '';
        let UpIcon = activeitem === id ? '' : 'hidden';

        const handleExpandIconClick = () => {
            if (activeitem === id) {
                DownIcon = '';
                UpIcon = 'hidden'
            } else {
                DownIcon = 'hidden';
                UpIcon = ''
            }
        }

        return (
            <React.Fragment key={id}>
                <div className='ml-20 mt-7 cursor-pointer' onClick={() => { handleExpandIconClick(); handleItemActivation(id) }}>
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
                    {/* {renderItem()} */}
                </div>
            </React.Fragment >
        )
    })



    return (
        <div>
            <h1 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Accordion</h1>
            <div>
                {renderData}
                <h1>{activeitem}</h1>
            </div>
        </div>
    )
}

export default Accordion