import React from 'react';
import Dropdown from '../components/Dropdown';

import { qnadata } from '../data/qnadata';

const DropdownPage = () => {
    return (
        <div>
            <Dropdown DropDownOptions={qnadata} />
        </div>
    )
}

export default DropdownPage