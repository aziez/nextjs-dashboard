import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-[#508C7A]`}
    >
      {/* <img src="./public/gd.png" className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
        src={'/dg.png'}
        alt="logo"
        width={120}
        height={120}
        className=" m-3 h-12 w-12"
      />
      <p className="text-[40px] ">Design</p>
    </div>
  );
}
