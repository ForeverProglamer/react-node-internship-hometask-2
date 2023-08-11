import { Button } from 'react-bootstrap';
import {
  faBoxArchive,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeTableCell from './HomeTableCell';

type HomeTableRowProps = {
  isHeader?: boolean;
  hasControls?: boolean;
  data: string[] | (string | number | boolean)[];
};

const defaultProps = {
  isHeader: false,
  hasControls: false,
};

export default function HomeTableRow({
  isHeader = false,
  hasControls = false,
  data,
}: HomeTableRowProps) {
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
              <Button variant="dark" size="sm" aria-label="Edit">
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
              </Button>
              <Button variant="dark" size="sm" aria-label="Archive">
                <FontAwesomeIcon icon={faBoxArchive} size="lg" />
              </Button>
              <Button variant="dark" size="sm" aria-label="Delete">
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </Button>
            </div>
          )}
        </HomeTableCell>
      )}
    </tr>
  );
}

HomeTableRow.defaultProps = defaultProps;
