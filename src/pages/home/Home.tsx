import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../layout/Header';
import HomeTable from './HomeTable';
import HomeCreateNoteModal from './HomeCreateNoteModal';

import useTypedSelector from '../../hooks/useTypedSelector';
import HomeTableNoteRow from './HomeTableNoteRow';
import HomeTableSummaryRow from './HomeTableSummaryRow';
import { generateSummaries } from '../../utils/utils';
import { Note, Summary } from '../../types/Note';

const notesListHeaders = ['Name', 'Created At', 'Category', 'Content', 'Dates'];
const summaryHeaders = ['Category', 'Count'];

type NotesListProps = {
  items: Note[];
  archived: boolean;
};

function NotesList({ items, archived }: NotesListProps) {
  const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);

  const noteRows = items.map((note) => (
    <HomeTableNoteRow key={note.createdAt} item={note} />
  ));

  return (
    <Row className="mb-2">
      <Col>
        <HomeTable title="Notes List" headers={notesListHeaders} hasExtraColumn>
          {noteRows}
        </HomeTable>
        <div className="d-grid justify-content-end">
          {!archived && (
            <Button variant="dark" onClick={() => setShowCreateNoteModal(true)}>
              New Note
            </Button>
          )}
        </div>
        <HomeCreateNoteModal
          show={showCreateNoteModal}
          onClose={() => setShowCreateNoteModal(false)}
        />
      </Col>
    </Row>
  );
}

type SummaryListProps = {
  items: Summary[];
};

function SummaryList({ items }: SummaryListProps) {
  const summaryRows = items.map((summary) => (
    <HomeTableSummaryRow key={summary.category} item={summary} />
  ));

  return (
    <Row className="py-2">
      <Col>
        <HomeTable title="Summary" headers={summaryHeaders}>
          {summaryRows}
        </HomeTable>
      </Col>
    </Row>
  );
}

export default function Home() {
  const [showArchived, setShowArchived] = useState(false);

  const notes = useTypedSelector((state) =>
    state.notes.filter((note) => note.archived === showArchived),
  );
  const summaries = generateSummaries(notes);

  return (
    <main>
      <Header onViewChange={() => setShowArchived((prev) => !prev)} />
      <Container className="py-4">
        <NotesList archived={showArchived} items={notes} />
        <SummaryList items={summaries} />
      </Container>
    </main>
  );
}
