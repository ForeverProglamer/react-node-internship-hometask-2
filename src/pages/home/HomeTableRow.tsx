import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  faBoxArchive,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeTableCell from './HomeTableCell';
import EditNoteModal from './EditNoteModal';

type HomeTableRowProps = {
  isHeader?: boolean;
  hasControls?: boolean;
  data: string[] | (string | number | boolean)[];
  noteId?: number;
};

const defaultProps = {
  isHeader: false,
  hasControls: false,
  noteId: undefined,
};

export default function HomeTableRow({
  isHeader = false,
  hasControls = false,
  data,
  noteId = undefined,
}: HomeTableRowProps) {
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);

  return (
    <tr className={isHeader ? 'table-dark' : undefined}>
      {data.map((value) => (
        <HomeTableCell key={undefined} isHeader={isHeader}>
          {value}
        </HomeTableCell>
      ))}
      {hasControls && (
        <HomeTableCell className="text-end" isHeader={isHeader}>
          {!isHeader && (
            <div className="btn-group">
              <Button
                variant="dark"
                size="sm"
                aria-label="Edit"
                onClick={() => setShowEditNoteModal(true)}
              >
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
              </Button>
              <Button variant="dark" size="sm" aria-label="Archive">
                <FontAwesomeIcon icon={faBoxArchive} size="lg" />
              </Button>
              <Button variant="dark" size="sm" aria-label="Delete">
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </Button>
              <EditNoteModal
                show={showEditNoteModal}
                onClose={() => setShowEditNoteModal(false)}
                noteId={noteId}
              />
            </div>
          )}
        </HomeTableCell>
      )}
    </tr>
  );
}

HomeTableRow.defaultProps = defaultProps;
