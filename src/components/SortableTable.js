import React from 'react'
import Table from './Table'
import { FaSortAlphaDown } from 'react-icons/fa'

const SortableTable = (props) => {
    const { config } = props;

    const handleClick = (label) => {
        console.log(label)
    }

    const updatedConfig = config.map((col) => {
        if (!col.sortValue) {
            return col;
        } else {
            return {
                ...col,
                header: () => <th onClick={() => handleClick(col.label)} className='cursor-pointer' > <div className='flex items-center mx-2'> <FaSortAlphaDown className='mx-1' />{col.label}</div></th>
            }
        }
    })
    return (
        <Table {...props} config={updatedConfig} />
    )
}

export default SortableTable