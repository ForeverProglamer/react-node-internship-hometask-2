import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../layout/Header';
import HomeTable from './HomeTable';
import CreateNoteModal from './CreateNoteModal';

import useTypedSelector from '../../hooks/useTypedSelector';
import NotesTableRow from './NotesTableRow';
import SummaryTableRow from './SummaryTableRow';
import { generateSummaries } from '../../utils/utils';

const notesListHeaders = ['Name', 'Created At', 'Category', 'Content', 'Dates'];
const summaryHeaders = ['Category', 'Count'];

export default function Home() {
  const [showArchived, toggleShowArchived] = useState(false);

  const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);

  const notes = useTypedSelector((state) =>
    state.notes.filter((note) => note.archived === showArchived),
  );
  const summaries = generateSummaries(notes);

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
