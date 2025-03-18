'use client';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {IDynamicTableDataProp, IDynamicTableProps} from "@/app/ui/tables/dynamic-table/definitions";

export default function DynamicTable(props: IDynamicTableProps) {
  const {columns, data, onClick} = props;

  const allColumns = [
    ...columns,
    {
      label: 'Ações',
      field: 'action',
      className: 'text-center',
    },
  ];

  function handleOnClick(row: IDynamicTableDataProp) {
    if (onClick) onClick(row);
  }

  return (
    <table className="w-full">
      <thead>
      <tr className="bg-black/10 text-left">
        {allColumns.map((column, i) => (
          <th
            key={i}
            className={`p-3 ${column.className}`}
          >
            {column.label}
          </th>
        ))}
      </tr>
      </thead>

      <tbody className="bg-white">
      {data.map((row, rowIndex) => (
        <tr
          key={`row-${rowIndex}`} className="hover:bg-primary/20 cursor-pointer text-black border-b-1"
          onClick={() => handleOnClick(row)}
        >
          {allColumns.map((column, columnIndex) => (
            <td
              key={`column-${columnIndex}`}
              className={`p-3 ${column.className}`}
            >
              {column.field === 'action' ? (
                <div>Action buttons</div>
              ) : (
                <div>
                  {typeof row[column.field] === 'boolean' ? (
                    <div>{row[column.field] ? (<CheckIcon color="success"/>) : (<ClearIcon color="warning"/>)}</div>
                  ) : (
                    <div>{row[column.field]}</div>
                  )}
                </div>
              )}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
