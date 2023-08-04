import React from 'react';
import './NotesTable.css';
import { nanoid } from 'nanoid';


type Props = {
    tableHeadData: React.ReactNode[];
    children?: React.ReactNode;
};


function Table({tableHeadData, children}: Props) {
  return (
    <table className='table'>
        <thead className='table-head' >
            <tr>
                {tableHeadData.map(item => <th key={nanoid()} className='table-head-data'>{item}</th>)}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}

export default Table;