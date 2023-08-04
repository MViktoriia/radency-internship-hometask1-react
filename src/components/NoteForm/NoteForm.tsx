import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './NoteForm.css'
import { useAppDispatch } from '../../redux/hooks';
import { addNote, editNote } from '../../redux/notesSlice';


type Props = {
  noteId: string;
  noteName: string;
  noteDate: string;
  noteCategory: string;
  noteContent: string;
  isEdit: boolean;
  closeModal: () => void;
}

function NoteForm({noteId, noteName, noteDate, noteCategory, noteContent, isEdit, closeModal}: Props) {

  const dispatch = useAppDispatch();
  const [name, setName] = useState(noteName);
  const [date, setDate] = useState(noteDate);
  const [category, setCategory] = useState(noteCategory);
  const [content, setContent] = useState(noteContent);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      const noteToEdit = {
        id: noteId,
        name: name,
        created: date,
        category: category,
        content: content,
        archived: false,
      }

      dispatch(editNote(noteToEdit));
      closeModal();
      return;
    }

    if (name === '' && date === '' && content === '' && category === '') {
    
      closeModal();
      return;
    }

    if (category === '') {
      alert('Please choose category');
     
      // closeModal();
      return;
    }

    const newNote = {
      id: nanoid(),
      name: name,
      created: date,
      category: category,
      content: content,
      archived: false,
    }
    dispatch(addNote(newNote));
    closeModal();
  }


  return (
    <form onSubmit={handleSubmit} className="note-form" >   
      <label className="note-form-label" htmlFor="note-name">Name
        <input className='note-name' value={name} onChange={(e)=> setName(e.target.value)} id="note-name" name="note-name" type="text"/> 
      </label>
      <label className="note-form-label" htmlFor="note-date">Date
        <input className='note-date' disabled={isEdit} value={date} onChange={(e)=> setDate(e.target.value)} id="note-date" name="note-date" type="date"/>
      </label>
      <label className="note-form-label" htmlFor="note-category">Category
          <select className='note-category' value={category} onChange={(e)=> setCategory(e.target.value)} name="note-category" id="note-category">
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
              <option value="Quote">Quote</option>   
          </select>
      </label>
      <label className="note-form-label" htmlFor="note-content">Content
        <input className='note-content' value={content} onChange={(e)=> setContent(e.target.value)} id="note-content" name="note-content" type="text"/>
      </label>
      <button type="submit" className="save-note-button">Save</button>
  </form>
  )
}

export default NoteForm;