export interface IDynamicTableDataProp {
  [key: string]: string | number | boolean;
}

export interface IDynamicTableProps {
  columns: {
    label: string;
    field: string;
    className?: string;
  }[];
  data: IDynamicTableDataProp[];
}
