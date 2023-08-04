import React from 'react';

import { Note } from "../../redux/notesSlice";
import NotesItem from "../NotesItem";

type Props = {
    notes: Note[];
}

function NotesList({notes}: Props) {


  return (
    <>
        {notes.map(({id,name,created,category,content}) =>  (
            <NotesItem id={id} key={id} name={name} created={created} category={category} content={content} />
         ))}
    </>
   
  )
}

export default NotesList;