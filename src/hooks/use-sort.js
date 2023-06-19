import { useState } from 'react'

const useSort = (data, config) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleSortReq = async (label) => {
        if (sortBy && sortBy === label) {
            if (sortOrder === null) {
                setSortOrder('asc');
                setSortBy(label);
            } else if (sortOrder === 'asc') {
                setSortOrder('desc');
                setSortBy(label);
            } else {
                setSortOrder(null)
            }
        } else {
            setSortOrder(null);
            setSortOrder('asc');
            setSortBy(label);
        }
    }

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

    return {
        sortOrder, setSortOrder, sortBy, setSortBy, handleSortReq, sortedData
    }

}

export default useSort;