import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import NotesTable from '../components/Table/NotesTable';
import NotesList from '../components/NotesList/NotesList';
import { categoriesInfo } from '../db/categories';
import Icon from '../components/Icon/Icon';
import NotesSummaryByCategories from '../components/NotesSummary/NotesSummaryByCategories';
import ControlBtn from '../components/ControlBtn/ControlBtn';
import Select from '../components/Select';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { showArchiveNotes } from '../redux/notesSlice';


function NotesPage() {
    const headersNotesListTable = ['','Name','Created', 'Category','Content','Dates', <Icon iconClass='edit' iconName='edit'/>, <Icon iconClass='archive' iconName='archive'/>, <Icon iconClass='delete' iconName='delete'/>];
    const headersSummaryTable = ['','NoteCategory','Active', 'Archived'];
    const optionsValues = ['Active', 'Archived'];
    
    const dispatch = useAppDispatch();

    const allNotes = useAppSelector(state=> state.notes.list);
    const activeNotes = allNotes.filter(note => note.archived === false);
    const archiveNotes = allNotes.filter(note => note.archived === true);
    
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

    const isArchiveShown = useAppSelector(state => state.notes.isArchiveShown);

    return (
        <>
            <Section>
                <Container>
                    <NotesTable tableHeadData={headersNotesListTable}>
                        {isArchiveShown ? <NotesList notes={archiveNotes}/> : <NotesList notes={activeNotes} />}
                    </NotesTable>
                    <div className='wrapper'>
                        <ControlBtn onClick={()=>console.log("Click")} btnClass='create-btn'>Create Node</ControlBtn>
                    </div> 
                    <div className='wrapper'>
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
    </>
  )
}

export default NotesPage;