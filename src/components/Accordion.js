import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ qnadata }) => {
    const [activeitem, setActiveitem] = useState(null);
    const renderData = () => {
        const handleItemActivation = (id) => {
            activeitem !== id ? setActiveitem(id) : setActiveitem(null)
        }
        return qnadata.map(({ id, q, a }) => {
            return (
                <div key={id}>
                    <AccordionItem activateItem={handleItemActivation} activeitem={activeitem} id={id} q={q} a={a} />
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