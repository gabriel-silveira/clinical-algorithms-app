export default function OutlinedButton(props: { label: string }) {
  const { label } = props;

  return (
    <button
      className={`outline-1 cursor-pointer py-2 px-4 hover:bg-white/15 rounded-sm`}
    >
      {label}
    </button>
  )
}
