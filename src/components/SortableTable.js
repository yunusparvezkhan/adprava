import React, { useState } from 'react'
import Table from './Table';
import useSort from '../hooks/use-sort';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa'
import { BiSortAlt2 } from 'react-icons/bi';
import { ImSortNumericAsc, ImSortNumbericDesc } from 'react-icons/im'

const SortableTable = (props) => {
    const { config, data } = props;
    const { sortBy, sortOrder, handleSortReq, sortedData } = useSort(data, config);

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
                        <th onClick={() => handleSortReq(col.label)} className='cursor-pointer'>
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

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable;