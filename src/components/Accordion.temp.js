import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ qnadata }) => {
    const [activeitem, setActiveitem] = useState('1');
    console.log(activeitem)

    const handleItemActivation = (id) => {
        activeitem !== id ? setActiveitem(id) : setActiveitem(null)
        // console.log('function invoke')
    }


    const renderData = qnadata.map(({ id, q, a }) => {
        return (
            <React.Fragment>
                <div key={id} onClick={() => handleItemActivation(id)} >
                    <AccordionItem activateItem={handleItemActivation} activeitem={activeitem} id={id} q={q} a={a} />
                </div>
            </React.Fragment>
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