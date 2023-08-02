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
    <>
        {notes.map(({id,name,created,category,content}) =>  (
            <NotesItem key={id} name={name} created={created} category={category} content={content} />
         ))}
    </>
   
  )
}

export default NotesList;