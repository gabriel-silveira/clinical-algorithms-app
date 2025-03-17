export default function AdminLayoutHeader() {
  const title = 'Inicio';

  return (
    <div className="absolute w-full p-0 bg-primary text-white h-[56px]">
      <div className="absolute inline-block w-auto ml-2 mt-[7px] p-2 cursor-pointer bg-transparent hover:bg-white/15 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="absolute ml-15 mt-[14px] w-6/12 text-xl">
        PAHO - {title}
      </div>
    </div>
  )
}
