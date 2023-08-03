import React from 'react';
import { dateParse } from '../../utils/dateParse';
import { categoriesInfo } from '../../db/categories';
import ControlBtn from '../ControlBtn';
import Icon from '../Icon';


import './NotesItem.css';
import '../../shared/styles/shared.css';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeNote, toggleNoteStatus } from '../../redux/notesSlice';


type Props = {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
}


function NotesItem({ id, name, created, category, content}: Props) {
  const datesInNote = dateParse(content);
  const categoryForRender = categoriesInfo.find(item => item.category === category);
  const isArchiveShown = useAppSelector(state => state.notes.isArchiveShown);
  
  const dispatch = useAppDispatch();

  function onEditClick (id: string): void {
    console.log("Edit");
  };  

  function onArchiveClick (id: string): void {
    dispatch(toggleNoteStatus(id));
  };  

  function onDeleteClick (id: string): void {
    dispatch(removeNote(id));
  };  
  
  
  return (
    <tr >
        <td className='table-data'>
            <span className="material-symbols-outlined category">{categoryForRender?.icon}</span>
        </td>
        <td className='table-data'>{name}</td>
        <td className='table-data'>{created}</td>
        <td className='table-data'>{category}</td>
        <td className='table-data'>{content}</td>
        <td className='table-data'>{datesInNote}</td>
        <td className='table-data'>
          <ControlBtn onClick={() => onEditClick(id)} btnClass='transparent'>
            <Icon iconClass='edit' iconName='edit' />
          </ControlBtn>
        </td>
        <td className='table-data'>
            {isArchiveShown ? 
            <ControlBtn onClick={() => onArchiveClick(id)} btnClass='transparent'>
            <Icon iconName='unarchive' iconClass='unarchive' />
          </ControlBtn> : 
            <ControlBtn onClick={() => onArchiveClick(id)} btnClass='transparent'>
              <Icon iconName='archive' iconClass='archive' />
            </ControlBtn> }
        </td>
        <td className='table-data'>
          <ControlBtn onClick={() => onDeleteClick(id)} btnClass='transparent'>
            <Icon iconClass='delete' iconName='delete' />
          </ControlBtn>
        </td>
    </tr>
  )
};

export default NotesItem;