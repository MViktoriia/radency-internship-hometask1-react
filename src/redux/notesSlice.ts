import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import notes from "../db/notes_db";

export type Note = {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    archived: boolean;
}

export type NoteState = {
    list: Note[];
    isArchiveShown: boolean;
}

const initialState: NoteState = {
    list: notes,
    isArchiveShown: false,
} 

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Note>) {
            state.list.push({
                id: action.payload.id,
                name: action.payload.name,
                created: action.payload.created,
                category: action.payload.category,
                content: action.payload.content,
                archived: action.payload.archived,
            });
        },
        editNote(state, action: PayloadAction<Note>) {
            const editedNote = state.list.find(note => note.id === action.payload.id);
            if (editedNote) {
                editedNote.name = action.payload.name;
                editedNote.category = action.payload.category;
                editedNote.content = action.payload.content;
            }
        },
        removeNote(state, action: PayloadAction<string>) {
            state.list = state.list.filter(note => note.id !== action.payload);
        }
        ,
        toggleNoteStatus(state, action: PayloadAction<string>) {
            const toggledNote = state.list.find(note => note.id === action.payload);
            if (toggledNote) {
                toggledNote.archived = !toggledNote.archived;
            } 
        },
        showArchiveNotes(state, action: PayloadAction<boolean>) {
            state.isArchiveShown = action.payload;
        }
    }
})



export const {addNote, editNote, removeNote, toggleNoteStatus, showArchiveNotes} = notesSlice.actions;
export default notesSlice.reducer;