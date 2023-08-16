import Table from 'react-bootstrap/Table';

import TableHeaderRow from './TableHeaderRow';

type HomeTableProps = {
  title: string;
  headers: string[];
  children: React.ReactNode;
  hasExtraColumn?: boolean;
};

const defaultProps = {
  hasExtraColumn: false,
};

export default function HomeTable({
  title,
  headers,
  children,
  hasExtraColumn = false,
}: HomeTableProps) {
  return (
    <>
      <h3>{title}</h3>
      <Table variant="primary" id="notes-list">
        <thead>
          <TableHeaderRow data={headers} hasExtraItem={hasExtraColumn} />
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </>
  );
}

HomeTable.defaultProps = defaultProps;
