import React, { Fragment } from 'react'

const Table = ({ data, config, keyFn }) => {

    const renderRows = data.map((rowData) => {

        const renderCells = config.map((colConf) => {
            return (
                <td className='p-5' key={keyFn(colConf)}>{colConf.render(rowData)}</td>
            )
        })

        return (
            <tr key={keyFn(rowData)} className='border-b'>
                {renderCells}
            </tr>
        )
    });

    const renderHeader = config.map((columnConfig) => {
        if (columnConfig.header) {
            return <Fragment key={keyFn(columnConfig)}>{columnConfig.header()}</Fragment>;
        } else {
            return (
                <th className='px-5' key={keyFn(columnConfig)} >{columnConfig.label}</th>
            )
        }
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