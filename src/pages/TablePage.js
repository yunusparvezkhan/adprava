import React from 'react'
import Table from '../components/Table'

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
            render: (row) => row.name
        },
        {
            label: 'Color',
            render: (row) => <div className={` p-5 m-2 ${row.color}`} ></div>
        },
        {
            label: 'Count',
            render: (row) => row.count
        }
    ]

    return (
        <div>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Table Page</h2>
            <Table data={data} config={config} />
        </div>
    )
}

export default TablePage