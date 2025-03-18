import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {IDynamicTableProps} from "@/app/ui/tables/dynamic-table/definitions";

export default function DynamicTable(props: IDynamicTableProps) {
  const {columns, data} = props;

  return (
    <table className="w-full">
      <thead>
      <tr className="bg-black/20 text-left">
        {columns.map((column, i) => (
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
        <tr key={`row-${rowIndex}`} className="hover:bg-primary/20 cursor-pointer text-black">
          {columns.map((column, columnIndex) => (
            typeof row[column.field] === 'boolean' ? (
              <td
                key={`column-${columnIndex}`}
                className={`p-3 ${column.className}`}
              >
                {row[column.field] ? (<CheckIcon/>) : (<ClearIcon/>)}
              </td>
            ) : (
              <td
                key={`column-${columnIndex}`}
                className={`p-3 ${column.className}`}
              >{row[column.field]}</td>
            )
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
