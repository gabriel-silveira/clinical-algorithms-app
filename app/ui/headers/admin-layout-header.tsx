'use client';

import MenuIcon from '@mui/icons-material/Menu';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import OutlinedButton from "@/app/ui/buttons/outline-buttons";

export default function AdminLayoutHeader() {
  return (
    <div className="absolute w-full p-0 bg-primary text-white h-[56px]">
      <div className="absolute inline-block w-auto ml-2 mt-[7px] p-2 cursor-pointer bg-transparent hover:bg-white/15 rounded-xl">
        <MenuIcon/>
      </div>

      <div className="absolute ml-15 mt-[14px] w-6/12 text-xl">
        PAHO
      </div>

      <div className="absolute w-[240px] left-[50%] ml-[-120px] mt-[5px] flex items-center justify-between">
        <div className="font-light mt-1">
          <AccountTreeIcon fontSize='large' />
        </div>

        <div className="font-bold text-xl mt-1">
          Algoritmos Clínicos
        </div>
      </div>

      <div className="absolute right-[95px] top-[15px]">
        <b>PAHO</b> (Master)
      </div>

      <div className="absolute right-0 mt-[7px] mr-[8px] ">
        <OutlinedButton label="Sair" />
      </div>
    </div>
  )
}
