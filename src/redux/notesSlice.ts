import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Note = {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    archived: boolean;
}

type NoteState = {
    notes: Note[];
    isLoading: boolean;
    error: unknown;
}

const initialState: NoteState = {
    notes: [],
    isLoading: false,
    error: null,
} 

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Note>) {
            state.notes.push({
                id: action.payload.id,
                name: action.payload.name,
                created: action.payload.created,
                category: action.payload.category,
                content: action.payload.content,
                archived: false,
            });
        },
        editNote(state, action: PayloadAction<Note>) {

        },
        deleteNote(state, action: PayloadAction<Note>) {
        
        },
        archiveNote(state, action: PayloadAction<Note>) {

        },
        unarchiveNote(state, action: PayloadAction<Note>) {

        }
    }

})

console.log(typeof Error('Help'));


export const {addNote, editNote, deleteNote, archiveNote, unarchiveNote} = notesSlice.actions;
export default notesSlice.reducer;