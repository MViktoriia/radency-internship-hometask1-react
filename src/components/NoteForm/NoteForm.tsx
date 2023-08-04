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

    if (category === '') {
      alert('Please choose category');
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
      <label className="note-form-label" htmlFor="note-name">
        <input placeholder='Name' className='note-name' value={name} onChange={(e)=> setName(e.target.value)} id="note-name" name="note-name" type="text"/> 
      </label>
      <label className="note-form-label" htmlFor="note-date">
        <input className='note-date' disabled={isEdit} value={date} onChange={(e)=> setDate(e.target.value)} id="note-date" name="note-date" type="date"/>
      </label>
      <label className="note-form-label" htmlFor="note-category">
          <select className='note-category' value={category} onChange={(e)=> setCategory(e.target.value)} name="note-category" id="note-category">
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
              <option value="Quote">Quote</option>   
          </select>
      </label>
      <label className="note-form-label" htmlFor="note-content">
        <input placeholder='Content' className='note-content' value={content} onChange={(e)=> setContent(e.target.value)} id="note-content" name="note-content" type="text"/>
      </label>
      {isEdit ? <button type="submit" className="save-note-button">Save</button> : <button type="submit" className="save-note-button"><span className="material-symbols-outlined">arrow_back</span></button>}
    </form>
  )
}

export default NoteForm;