import Image from "next/image";

export default function AdminLayoutFooter() {
  return (
    <div className="absolute w-full bottom-0 bg-primary h-[50px] text-white">
      <div className="mt-3 ml-4">Version 0.3.0</div>

      <div className="absolute left-[50%] ml-[-88px] top-[7px] pr-4 text-right text-[14px] leading-[16px] border-r-1">
        Powered<br/>by
      </div>

      <div className="absolute left-[50%] top-[9px]">
        <Image
          src="/bireme-logo.png"
          width={119}
          height={24}
          alt="Flowchar icon"
        />
      </div>
    </div>
  )
}
