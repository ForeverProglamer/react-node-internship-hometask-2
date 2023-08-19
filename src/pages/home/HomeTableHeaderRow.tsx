type HomeTableHeaderRowProps = {
  data: string[];
  hasExtraItem?: boolean;
};

const defaultProps = {
  hasExtraItem: false,
};

export default function HomeTableHeaderRow({
  data,
  hasExtraItem = false,
}: HomeTableHeaderRowProps) {
  const headers = data.map((elem) => <th key={undefined}>{elem}</th>);
  return (
    <tr className="table-dark">
      {headers}
      {hasExtraItem && <th aria-label="extraItem" />}
    </tr>
  );
}

HomeTableHeaderRow.defaultProps = defaultProps;
