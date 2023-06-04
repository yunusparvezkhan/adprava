import React from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = ({ DropDownOptions }) => {
    return (
        <div>
            <Dropdown DropDownOptions={DropDownOptions} />
        </div>
    )
}

export default DropdownPage