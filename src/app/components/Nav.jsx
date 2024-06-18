// icons
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Inicio", path: "/", icon: <HiHome /> },
  { name: "Info", path: "/about", icon: <HiUser /> },
  { name: "Servicios", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Trabajos", path: "/work", icon: <HiViewColumns /> },
  {
    name: "Testimonios",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "Contacto",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col  items-center xl:justify-center gap-y-4  fixed h-max bottom-0 mt-auto xl:right-[1%] z-50 w-full top-0 xl:w-12 xl:max-w-[100px] xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:h-max py-8 bg-white/10 ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative items-center flex group hover:text-accent transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[10px]border-r-0 absolute -right-2"> </div>
                </div>

               
              </div>

              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;