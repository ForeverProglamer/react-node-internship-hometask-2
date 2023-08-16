import { Summary } from '../../types/Summary';

type SummaryTableRowProps = {
  item: Summary;
};

const defaultProps = {};

export default function SummaryTableRow({ item }: SummaryTableRowProps) {
  return (
    <tr>
      <td>{item.category}</td>
      <td>{item.count}</td>
    </tr>
  );
}

SummaryTableRow.defaultProps = defaultProps;
