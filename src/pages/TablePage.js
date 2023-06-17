import React from 'react'
import Table from '../components/Table'
import SortableTable from '../components/SortableTable'


const TablePage = () => {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', count: 5 },
        { name: 'Mango', color: 'bg-orange-700', count: 10 },
        { name: 'Lichi', color: 'bg-red-500', count: 5 },
        { name: 'Watermelon', color: 'bg-green-400', count: 2 },
        { name: 'Apple', color: 'bg-red-400', count: 7 },
    ]

    const config = [
        {
            label: 'Name',
            render: (row) => row.name,
            sortValue: (row) => row.name,
        },
        {
            label: 'Color',
            render: (row) => <div className={` p-5 m-2 ${row.color}`} ></div>,
            header: () => <th className='px-5 text-center' key={'Color'} >Color</th>
        },
        {
            label: 'Count',
            render: (row) => row.count,
            sortValue: (row) => row.count,
        },
        {
            label: 'Sq Count',
            render: (row) => row.count ** 2,
            sortValue: (row) => row.count ** 2,
        }
    ];

    const keyFn = (item) => {
        if (item.name) {
            return item.name;
        } else if (item.label) {
            return item.label;
        }
    }

    return (
        <div>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Table Page</h2>
            {/* <SortableTable data={data} config={config} keyFn={keyFn} /> */}
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage