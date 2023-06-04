import React from 'react';
import Dropdown from '../components/Dropdown';

import { qnadata } from '../data/qnadata';

const DropdownPage = () => {
    return (
        <div>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Dropdown Page</h2>
            <Dropdown DropDownOptions={qnadata} />
        </div>
    )
}

export default DropdownPage