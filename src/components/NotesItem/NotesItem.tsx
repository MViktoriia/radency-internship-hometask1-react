import React from 'react';
import { dateParse } from '../../utils/dateParse';
import { categoriesInfo } from '../../db/categories';
import './NotesItem.css';
import '../../shared/styles/shared.css';
import ControlBtn from '../ControlBtn';
import Icon from '../Icon';
import { nanoid } from 'nanoid';

type Props = {
  key: string;
  name: string;
  created: string;
  category: string;
  content: string;
}


function NotesItem({ name, created, category, content}: Props) {
    const datesInNote = dateParse(content);
    const categoryForRender = categoriesInfo.find(item => item.category === category);

    const onClick = (event: React.MouseEvent) => {
      console.log(event.target);
    }

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
        <td className='table-data'><ControlBtn onClick={onClick} btnClass='transparent'><Icon iconClass='edit' iconName='edit' /></ControlBtn></td>
        <td className='table-data'>
            <ControlBtn onClick={onClick} btnClass='transparent'><Icon iconName='archive' iconClass='archive' /></ControlBtn>
            <ControlBtn onClick={onClick} btnClass='transparent is-hidden'><Icon iconName='unarchive' iconClass='unarchive' /></ControlBtn>
        </td>
        <td id={nanoid()} className='table-data'><ControlBtn onClick={onClick} btnClass='transparent'><Icon iconClass='delete' iconName='delete' /></ControlBtn></td>
    </tr>
  )
}

export default NotesItem;