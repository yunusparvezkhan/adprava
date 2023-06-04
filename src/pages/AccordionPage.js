import React from 'react';
import Accordion from '../components/Accordion';
import { qnadata } from '../data/qnadata'

const AccordionPage = () => {
    return (
        <div>
            {/* This change got pushed on previous commit `APOLOGY n1`, hence making new commit explaining it */}
            <h1 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Accordion</h1>
            <Accordion qnadata={qnadata} />
        </div>
    )
}

export default AccordionPage