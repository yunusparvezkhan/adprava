import React, { useState } from 'react'
import Table from './Table'
import { FaSortAlphaDown } from 'react-icons/fa'

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;


    const handleClick = (label) => {
        console.log(label)
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else {
            setSortOrder(null)
        }
    }

    const updatedConfig = config.map((col) => {
        if (!col.sortValue) {
            return col;
        } else {
            return {
                ...col,
                header: () => <th onClick={() => handleClick(col.label)} className='cursor-pointer'> <div className='flex items-center mx-2'> <FaSortAlphaDown className='mx-1' />{col.label}</div></th>
            }
        }
    })


    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(col => col.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else if (typeof valueA === 'number') {
                return (valueA - valueB) * reverseOrder;
            };
        });
    };

    return (
        <div>
            {sortOrder} --- {sortBy}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable