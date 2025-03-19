import clsx from 'clsx';

interface ISimpleButtonProps {
  label: string;
  color: 'primary' | 'secondary' | 'success' | 'warning';
}

export default function SimpleButton(props: ISimpleButtonProps) {
  const { label, color } = props;

  return (
    <button
      className={clsx('py-2 px-3 rounded-md font-bold cursor-pointer', {
        'bg-primary hover:bg-primary/80': color === 'primary',
        'bg-secondary hover:bg-secondary/80': color === 'secondary',
        'bg-success hover:bg-success/80': color === 'success',
        'bg-warning hover:bg-warning/80': color === 'warning',
      })}
    >
      {label}
    </button>
  )
}
