import React from 'react';
import { nanoid } from 'nanoid';
import Icon from '../Icon/Icon';
import { Note } from '../../redux/notesSlice';


type Category = {
  category: string;
  icon: string;
}

type Props = {
    notes: Note[];
    categories: Category[]; 
}

function NotesSummaryByCategories({notes, categories}: Props) {
  return (
    <>
        {categories.map(({category, icon}) =>  (
            <tr key={nanoid()}>
                <td className='table-data'><Icon iconName={icon} iconClass='category'/></td>
                <td className='table-data'>{category}</td>
                <td className='table-data'>{notes.filter(note => note.category===category && note.archived === false).length}</td>
                <td className='table-data'>{notes.filter(note => note.category===category && note.archived === true).length}</td>
            </tr>
         ))}
    </>
  )
}

export default NotesSummaryByCategories;