import React, { useState } from 'react'
import Table from './Table'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa'
import { BiSortAlt2 } from 'react-icons/bi';
import { ImSortNumericAsc, ImSortNumbericDesc } from 'react-icons/im'

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;


    const handleClick = async (label) => {
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


    const updatedConfig = config.map((col) => {

        const rendericon = () => {
            if (sortBy === col.label) {
                if (typeof col.sortValue(data[0]) === 'string') {
                    if (sortOrder === 'asc') {
                        return <FaSortAlphaDown className='mx-1' />
                    } else if (sortOrder === 'desc') {
                        return <FaSortAlphaDownAlt className='mx-1' />
                    } else {
                        return <BiSortAlt2 className='mx-1' />
                    }
                } else if (typeof col.sortValue(data[0]) === 'number') {
                    if (sortOrder === 'asc') {
                        return <ImSortNumericAsc className='mx-1' />
                    } else if (sortOrder === 'desc') {
                        return <ImSortNumbericDesc className='mx-1' />
                    } else {
                        return <BiSortAlt2 className='mx-1' />
                    }
                }
            } else {
                return <BiSortAlt2 className='mx-1' />
            }
        }

        if (!col.sortValue) {
            return col;
        } else {
            return {
                ...col,
                header: () => {
                    return (
                        <th onClick={() => handleClick(col.label)} className='cursor-pointer'>
                            <div className='flex items-center mx-2'>
                                <div>
                                    {rendericon()}
                                </div>
                                <div>
                                    {col.label}
                                </div>
                            </div>
                        </th>
                    )
                }
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
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable;