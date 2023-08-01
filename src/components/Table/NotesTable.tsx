import React from 'react';
import './NotesTable.css';


type Props = {
    tableHeadData: string[];
    children?: React.ReactNode;
};


function Table({tableHeadData, children}: Props) {
  return (
    <table className='table'>
        <thead className='table-head-data'>
            <tr>
                {tableHeadData.map(item => <th>{item}</th>)}
            </tr>
        </thead>
        <>
            {children}
        </>
    </table>
  )
}

export default Table;