type TableHeaderRowProps = {
  data: string[];
  hasExtraItem?: boolean;
};

const defaultProps = {
  hasExtraItem: false,
};

export default function TableHeaderRow({
  data,
  hasExtraItem = false,
}: TableHeaderRowProps) {
  const headers = data.map((elem) => <th key={undefined}>{elem}</th>);
  return (
    <tr className="table-dark">
      {headers}
      {hasExtraItem && <th aria-label="extraItem" />}
    </tr>
  );
}

TableHeaderRow.defaultProps = defaultProps;
