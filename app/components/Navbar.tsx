import Link from "next/link";
import { Input } from "@nextui-org/react";
import Magnify from "./svg/magnify";
import Facebook from "./svg/facebook";
import SvgHome from "./svg/home";
import Watch from "./svg/watch";
import Market from "./svg/market";
import Games from "./svg/games";
import Bell from "./svg/bell";
import Messenger from "./svg/messenger";
import Menu from "./svg/menu"

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center px-12 shadow shadow-slate-500 bg-slate-50">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Facebook className="w-9 h-9 text-blue-500" />
          </Link>
          <Input
            type="text"
            placeholder="Search on facebook"
            labelPlacement="outside"
            startContent={
              <Magnify className="w-5 h-5" />
            } />
        </div>
        <ul className="flex gap-16 w-96">
          <li >
            <SvgHome className="w-7 h-7 text-grey-50" />
          </li>
          <li >
            <Watch className="w-7 h-7 text-grey-50" />
          </li>
          <li >
            <Market className="w-7 h-7 text-grey-50" />
          </li>
          <li >
            <Games className="w-7 h-7 text-grey-50" />
          </li>
        </ul>
        <ul className="flex gap-3">
          <li className=" rounded-full hover:bg-gray-400 text-black hover:text-zinc-500 flex items-center justify-center w-fit h-fit bg-gray-300 px-2 py-2">
            <Bell className="w-4 h-4" />
          </li>
          <li className="rounded-full hover:bg-gray-400 text-black hover:text-zinc-500 flex items-center justify-center w-fit h-fit bg-gray-300 px-2 py-2">
            <Messenger className="w-4 h-4" />
          </li>
          <li className="rounded-full hover:bg-gray-400 text-black hover:text-zinc-500 flex items-center justify-center w-fit h-fit bg-gray-300 px-2 py-2">
            <Menu className="w-4 h-4" />
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar;
