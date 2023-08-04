import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';
import { categoriesInfo } from '../db/categories';
import Section from '../components/Section';
import Container from '../components/Container';
import NotesTable from '../components/Table/NotesTable';
import NotesList from '../components/NotesList';
import Icon from '../components/Icon/Icon';
import NotesSummaryByCategories from '../components/NotesSummary';
import ControlBtn from '../components/ControlBtn/ControlBtn';
import Select from '../components/Select';
import NoteForm from '../components/NoteForm/NoteForm';
import Modal from '../components/Modal';
import { formatDate } from '../utils/formatDate';


import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addNote, showArchiveNotes } from '../redux/notesSlice';




function NotesPage() {
    const headersNotesListTable = ['','Name','Created', 'Category','Content','Dates', <Icon iconClass='edit' iconName='edit'/>, <Icon iconClass='archive' iconName='archive'/>, <Icon iconClass='delete' iconName='delete'/>];
    const headersSummaryTable = ['','NoteCategory','Active', 'Archived'];
    const optionsValues = ['Active', 'Archived'];
    
    const dispatch = useAppDispatch();

    const allNotes = useAppSelector(state=> state.notes.list);
    const activeNotes = allNotes.filter(note => note.archived === false);
    const archiveNotes = allNotes.filter(note => note.archived === true);
    const isArchiveShown = useAppSelector(state => state.notes.isArchiveShown);
    const todayDate = new Date();
    const formatedTodayDate = formatDate(todayDate);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [newNoteId, setNewNoteId] = useState<string>('');
   

    
    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        switch (event.target.value) {
            case 'Archived':
                return dispatch(showArchiveNotes(true))
        
            case 'Active':
                return dispatch(showArchiveNotes(false))
        
            default:
                break;
        }         
    };

    const onCreateBtnClick = () => {
        const id = nanoid();
        setNewNoteId(id);
        setShowModal(true);
        document.body.classList.add('modal-open');

        const newNote = {
        id: id,
        name: '',
        created: formatedTodayDate,
        category: 'Task',
        content: '',
        archived: false,
        }
        
        dispatch(addNote(newNote));
    }

    
    

    return (
        <main>
            <Section>
                <Container>
                    <NotesTable tableHeadData={headersNotesListTable}>
                        {isArchiveShown ? <NotesList notes={archiveNotes}/> : <NotesList notes={activeNotes} />}
                    </NotesTable>
                    <div className='wrapper'>
                        {!isArchiveShown && <ControlBtn onClick={onCreateBtnClick} btnClass='create-btn'>Create Node</ControlBtn>}
                    </div> 
                    <div className='wrapper archive-select-wrapper'>
                        <Select name='show-archive' values={optionsValues} onChange={onSelectChange}/>                
                    </div> 
                </Container>
            </Section>
            <Section>
                <Container>
                    <NotesTable tableHeadData={headersSummaryTable}>
                        <NotesSummaryByCategories notes={allNotes} categories={categoriesInfo}/>
                    </NotesTable>
                </Container>
            </Section>
            {showModal && createPortal(
        <Modal onClose={()=> {setShowModal(false); document.body.classList.remove('modal-open');}}><NoteForm noteId={newNoteId} noteName='' noteDate={formatedTodayDate} noteCategory='Task' noteContent='' isEdit={false} closeModal={()=> {setShowModal(false); document.body.classList.remove('modal-open');}}/></Modal>,
        document.body
      )}
    </main>
  )
}

export default NotesPage;