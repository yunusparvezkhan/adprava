import React from 'react'

const Table = ({ data, config }) => {

    const renderRows = data.map((row) => {
        return (
            <tr key={row.name} className='border-b'  >
                <td className='p-5' >{row.name}</td>
                <td className='p-5' >
                    <div className={`p-5 m-2 ${row.color}`} ></div>
                </td>
                <td className='p-5'>{row.count}</td>
            </tr>
        )
    });

    const renderHeader = config.map((rowH) => {
        return (
            <th className='px-10'>{rowH.label}</th>
        )
    })

    return (
        <div className='ml-20 mt-10' >
            <table className='table-auto border-spacing-2' >
                <thead>
                    <tr className='border-b-2' >
                        {/* Previously rendered the headers by hard coding all the <th> */}
                        {/* ------------------------------------------------------------------       */}
                        {/* <th className='px-10'>Fruit</th>                                 //
                        <th >Color</th>                                                     //
                        <th className='px-5' >Count</th>                                   //        */}
                        {/* --------------------------------------------------------------//         */}


                        {/* Now the headers are rendered by mapping the array of objects got from the parent component */}
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