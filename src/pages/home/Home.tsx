import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Header from '../../layout/Header';
import HomeTable from './HomeTable';

import useTypedSelector from '../../hooks/useTypedSelector';
import { Summary } from '../../types/Summary';

const noteKeys = ['name', 'createdAt', 'category', 'content'];
const summaryKeys = ['category', 'count'];

export default function Home() {
  const [showArchived, toggleShowArchived] = useState(false);

  const notes = useTypedSelector((state) =>
    state.notes.filter((note) => note.archived === showArchived),
  );

  // TODO replace with actual summary calculation
  const summaries: Summary[] = [
    { category: 'Task', count: 0 },
    { category: 'Idea', count: 0 },
    { category: 'Random Thought', count: 0 },
  ];

  return (
    <main>
      <Header onViewChange={() => toggleShowArchived((prev) => !prev)} />
      <Container className="py-4">
        <Row className="mb-2">
          <Col>
            <HomeTable
              title="Notes List"
              headers={noteKeys}
              data={notes}
              hasControls
            />
            <div className="d-grid justify-content-end">
              <Button variant="dark">New Note</Button>
            </div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <HomeTable title="Summary" headers={summaryKeys} data={summaries} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
