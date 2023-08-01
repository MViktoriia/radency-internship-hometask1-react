// import React from 'react';

import NotesItem from "../NotesItem/NotesItem";

export type Note = {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    archived?: boolean;
}

type Props = {
    notes: Note[];
}

function NotesList({notes}: Props) {
  return (
    <tbody>
        {notes.map(({id,name,created,category,content}) =>  (
            <NotesItem id={id} name={name} created={created} category={category} content={content} />
         ))}
    </tbody>
   
  )
}

export default NotesList;