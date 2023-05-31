import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ qnadata }) => {
    const renderData = () => {
        return qnadata.map(({ q, a }) => {
            return (
                <div>
                    <AccordionItem q={q} a={a} />
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