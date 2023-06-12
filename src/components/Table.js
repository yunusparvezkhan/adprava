import React from 'react'

const Table = ({ data }) => {

    const renderRows = data.map((row) => {
        return (
            <tr key={row.name} >
                <th>{row.name}</th>
                <th className={`p-5 ${row.color}`} ></th>
                <th>{row.count}</th>
            </tr>
        )
    })

    return (
        <div className='ml-20 mt-10' >
            <table>
                <thead>
                    <tr>
                        <th className='px-10'>Fruit</th>
                        <th >Color</th>
                        <th className='px-5' >Count</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table