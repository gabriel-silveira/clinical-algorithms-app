export default function OutlinedButton(props: { label: string, width?: number }) {
  const { label, width } = props;

  return (
    <button
      className={`outline-1 cursor-pointer p-2 hover:bg-white/15 rounded-sm ${width ? `w-[${width}px]` : ''}`}
    >
      {label}
    </button>
  )
}
