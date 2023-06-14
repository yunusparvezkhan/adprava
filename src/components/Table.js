import React from 'react'

const Table = ({ data, config }) => {

    const renderRows = data.map((row) => {

        const renderCells = config.map((colConf) => {
            return (
                <td className='p-5' key={colConf.label}>{colConf.render(row)}</td>
            )
        })

        return (
            <tr key={row.name} className='border-b'>
                {renderCells}
            </tr>
        )
    });

    const renderHeader = config.map((columnConfig) => {
        return (
            <th className='px-10' key={columnConfig.label} >{columnConfig.label}</th>
        )
    })

    return (
        <div className='ml-20 mt-10' >
            <table className='table-auto border-spacing-2' >
                <thead>
                    <tr className='border-b-2' >
                        {renderHeader}
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