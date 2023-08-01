import React from 'react';
import { dateParse } from '../../utils/dateParse';
import { categoriesInfo } from '../../db/categories';
import { Note } from '../NotesList/NotesList';
import '../Table/NotesTable.css';

type Props = {
    note: Note;
}

function NotesItem({id, name, created, category, content}: Note) {
    const datesInNote = dateParse(content);
    const categoryForRender = categoriesInfo.find(item => item.category === category);

  return (
    <tr id={id} >
        <td className='table-data'>
            <span className="material-symbols-outlined category">{categoryForRender?.icon}</span>
        </td>
        <td className='table-data'>{name}</td>
        <td className='table-data'>{created}</td>
        <td className='table-data'>{category}</td>
        <td className='table-data'>{content}</td>
        <td className='table-data'>{datesInNote}</td>
        <td className='table-data'><span className="material-symbols-outlined edit">edit</span></td>
        <td className='table-data'>
            <span className="material-symbols-outlined archive">archive</span>
            <span className="material-symbols-outlined unarchive is-hidden">unarchive</span>
        </td>
        <td className='table-data'><span className="material-symbols-outlined delete">delete</span></td>
    </tr>
  )
}

export default NotesItem;