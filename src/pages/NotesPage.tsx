import React from 'react'
import Section from '../components/Section';
import Container from '../components/Container';
import NotesTable from '../components/Table/NotesTable';
import NotesList from '../components/NotesList/NotesList';
import notes from '../db/notes_db';
import { categoriesInfo } from '../db/categories';
import Icon from '../components/Icon/Icon';
import NotesSummaryByCategories from '../components/NotesSummary/NotesSummaryByCategories';
import ControlBtn from '../components/ControlBtn/ControlBtn';
import Select from '../components/Select';

function NotesPage() {
    const headersNotesListTable = ['','Name','Created', 'Category','Content','Dates', <Icon iconClass='edit' iconName='edit'/>, <Icon iconClass='archive' iconName='archive'/>, <Icon iconClass='delete' iconName='delete'/>];
    const headersSummaryTable = ['','NoteCategory','Active', 'Archived'];
    const optionsValues = ['Active', 'Archived'];

  return (
    <>
        <Section>
            <Container>
                <NotesTable tableHeadData={headersNotesListTable}>
                    <NotesList notes={notes}/>
                 </NotesTable>
                <div className='wrapper'>
                     <ControlBtn onClick={()=>console.log("Click")} btnClass='create-btn'>Create Node</ControlBtn>
                </div> 
                <div className='wrapper'>
                    <Select name='show-archive' values={optionsValues} selectedValue='Archive' onChange={()=>console.log("changed")}/>                
                </div> 
            </Container>
        </Section>
        <Section>
            <Container>
                <NotesTable tableHeadData={headersSummaryTable}>
                    <NotesSummaryByCategories notes={notes} categories={categoriesInfo}/>
                </NotesTable>
            </Container>
        </Section>
  </>
  )
}

export default NotesPage;