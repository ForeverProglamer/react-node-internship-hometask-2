import { Summary } from '../../types/Note';

type HomeTableSummaryRowProps = {
  item: Summary;
};

const defaultProps = {};

export default function HomeTableSummaryRow({
  item,
}: HomeTableSummaryRowProps) {
  return (
    <tr>
      <td>{item.category}</td>
      <td>{item.count}</td>
    </tr>
  );
}

HomeTableSummaryRow.defaultProps = defaultProps;
