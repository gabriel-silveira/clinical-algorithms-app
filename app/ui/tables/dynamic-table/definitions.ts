export interface IDynamicTableProps {
  columns: {
    label: string;
    field: string;
    className?: string;
    align?: 'left' | 'center';
  }[];
  data: { [key: string]: string | number | boolean }[];
}
