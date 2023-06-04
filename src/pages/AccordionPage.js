import React from 'react';
import Accordion from '../components/Accordion';
import { qnadata } from '../data/qnadata'

const AccordionPage = () => {
    return (
        <div>
            <Accordion qnadata={qnadata} />
        </div>
    )
}

export default AccordionPage