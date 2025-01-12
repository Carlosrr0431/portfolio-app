import Image from "next/image";
import Link from "next/link";

import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">

    <div className="container mx-auto">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-8 py-8">
        <Link href={'/'} className="">
          <h2 className="xl:text-[30px] xl:h2 xl:w-full">Carlos <span className="text-accent">RR.</span></h2>
        </Link>

        <Socials/>
      </div>

    </div>

  </header>;
};

export default Header;
