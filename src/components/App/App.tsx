import React from 'react';
import './App.css';
import Section from '../Section';
import Container from '../Container';
import NotesTable from '../Table/NotesTable';
import NotesList from '../NotesList/NotesList';
import notes from '../../db/notes_db';

function App() {
  const headersNotesListTable = ['','Name','Created', 'Category','Content','Dates'];
  const headersSummaryTable = ['','NoteCategory','Active', 'Archived'];

  return (
    <main>
      <Section>
        <Container>
         <NotesTable tableHeadData={headersNotesListTable}>
          <NotesList notes={notes}/>
         </NotesTable>
        </Container>
      </Section>
      <Section>
        <Container>
         <NotesTable tableHeadData={headersSummaryTable}/>
        </Container>
      </Section>
      
    </main>
  );
}

export default App;
