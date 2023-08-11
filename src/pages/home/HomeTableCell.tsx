import React from 'react';

type HomeTableCellProps = {
  className?: string;
  isHeader: boolean;
  children: React.ReactNode;
};

const defaultProps = {
  className: undefined,
};

export default function HomeTableCell({
  className = undefined,
  isHeader,
  children,
}: HomeTableCellProps) {
  if (isHeader) return <th>{children}</th>;

  const isLongString = (value: React.ReactNode) =>
    typeof value === 'string' && value.length > 40;

  return (
    <td
      className={
        (className ?? '') + (isLongString(children) ? 'text-truncate' : '')
      }
      style={isLongString(children) ? { maxWidth: '150px' } : {}}
    >
      {children}
    </td>
  );
}

HomeTableCell.defaultProps = defaultProps;
