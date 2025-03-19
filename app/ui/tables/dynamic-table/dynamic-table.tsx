'use client';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {IDynamicTableProps} from "@/app/ui/tables/dynamic-table/definitions";
import Link from "next/link";
import IconButton from "@/app/ui/buttons/icon-buttons";

export default function DynamicTable(props: IDynamicTableProps) {
  const {columns, data} = props;

  const allColumns = [
    ...columns,
    {
      label: 'Ações',
      field: 'action',
      className: 'text-center',
    },
  ];

  return (
    <table className="w-full">
      <thead>
      <tr className="bg-white/8 text-left">
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
          key={`row-${rowIndex}`} className="hover:bg-black/1 text-black"
          style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}
        >
          {allColumns.map((column, columnIndex) => (
            <td
              key={`column-${columnIndex}`}
              className={`px-5 py-2 ${column.className}`}
            >
              {column.field === 'action' ? (
                <div>
                  <Link
                    href="/admin/users/create"
                  >
                    <IconButton
                      Icon={EditIcon}
                      color="primary"
                    />
                  </Link>

                  <Link
                    href="/admin/users/create"
                  >
                    <IconButton
                      Icon={DeleteForeverIcon}
                      color="warning"
                    />
                  </Link>
                </div>
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
