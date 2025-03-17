import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function AdminLayoutHeader() {
  const title = 'Inicio';

  return (
    <div className="absolute w-full p-0 bg-primary text-white h-[56px]">
      <div className="absolute inline-block w-auto ml-2 mt-[7px] p-2 cursor-pointer bg-transparent hover:bg-white/15 rounded-xl">
        <MenuIcon/>
      </div>

      <div className="absolute ml-15 mt-[14px] w-6/12 text-xl">
        PAHO - {title}
      </div>

      <div className="absolute w-[250px] left-[50%] ml-[-125px] mt-[5px] flex items-center justify-between">
        <Image
          src="/flowchart-icon.png"
          width={136 / 3}
          height={127 / 3}
          alt="Flowchar icon"
        />

        <div className="font-bold text-xl">
          Algoritmos Clínicos
        </div>
      </div>
    </div>
  )
}
