import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../layout/Header';
import HomeTable from './HomeTable';
import CreateNoteModal from './CreateNoteModal';

import useTypedSelector from '../../hooks/useTypedSelector';
import { Summary } from '../../types/Summary';
import NotesTableRow from './NotesTableRow';
import SummaryTableRow from './SummaryTableRow';

const notesListHeaders = ['Name', 'Created At', 'Category', 'Content'];
const summaryHeaders = ['Category', 'Count'];

export default function Home() {
  const [showArchived, toggleShowArchived] = useState(false);

  const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);

  const notes = useTypedSelector((state) =>
    state.notes.filter((note) => note.archived === showArchived),
  );

  // TODO replace with actual summary calculation
  const summaries: Summary[] = [
    { category: 'Task', count: 0 },
    { category: 'Idea', count: 0 },
    { category: 'Random Thought', count: 0 },
  ];

  const noteRows = notes.map((note) => (
    <NotesTableRow key={note.createdAt} item={note} />
  ));

  const summaryRows = summaries.map((summary) => (
    <SummaryTableRow key={summary.category} item={summary} />
  ));

  return (
    <main>
      <Header onViewChange={() => toggleShowArchived((prev) => !prev)} />
      <Container className="py-4">
        <Row className="mb-2">
          <Col>
            <HomeTable
              title="Notes List"
              headers={notesListHeaders}
              hasExtraColumn
            >
              {noteRows}
            </HomeTable>
            <div className="d-grid justify-content-end">
              <Button
                variant="dark"
                onClick={() => setShowCreateNoteModal(true)}
              >
                New Note
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <HomeTable title="Summary" headers={summaryHeaders}>
              {summaryRows}
            </HomeTable>
          </Col>
        </Row>
        <CreateNoteModal
          show={showCreateNoteModal}
          onClose={() => setShowCreateNoteModal(false)}
        />
      </Container>
    </main>
  );
}
