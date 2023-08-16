import Table from 'react-bootstrap/Table';

import HomeTableRow from './HomeTableRow';

import { Note } from '../../types/Note';
import { Summary } from '../../types/Summary';

import camelCaseKeyToTableHeader from '../../utils/utils';
import timestampToDateString from '../../utils/date';

type HomeTableProps = {
  title: string;
  headers: string[];
  data: Note[] | Summary[];
  hasControls?: boolean;
};

const defaultProps = {
  hasControls: false,
};

export default function HomeTable({
  title,
  headers,
  data,
  hasControls = false,
}: HomeTableProps) {
  const getDataValues = (item: Note | Summary) =>
    headers.map((key) => {
      const value = item[key];
      if (key === 'createdAt') return timestampToDateString(value as number);
      return value;
    });

  const dataRows = data.map((item) => (
    <HomeTableRow
      noteId={item.createdAt as number}
      key={item.createdAt}
      data={getDataValues(item)}
      hasControls={hasControls}
    />
  ));
  return (
    <>
      <h3>{title}</h3>
      <Table variant="primary" id="notes-list">
        <thead>
          <HomeTableRow
            isHeader
            data={headers.map(camelCaseKeyToTableHeader)}
            hasControls={hasControls}
          />
        </thead>
        <tbody>{dataRows}</tbody>
      </Table>
    </>
  );
}

HomeTable.defaultProps = defaultProps;
