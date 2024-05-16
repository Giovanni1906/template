import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navIcons } from "../utils/icons";

const Nav = () => {
  return (
    <header>
      <nav className="flex bg-myPrimaryColor text-mySecundaryColor justify-between fixed w-full top-0 z-10">
        <div className="flex items-center">
          <Link href="/">
            <span className="-m-1.5 p-1.5 cursor-pointer ">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto px-3 hover:animate-squeeze"
                src="/images/header/verticalLogo.png"
                alt="Company Logo"
              />
            </span>
          </Link>
        </div>

        <ul className="flex items-center">
          <li className="p-2 px-3 hover:animate-pulsing">
            <Link href="/" className="text-xl ">
              Home
            </Link>
          </li>

          <li className="p-2 px-3 hover:animate-pulsing">
            <Link href="/aboutUs" className="text-xl">
              About us
            </Link>
          </li>
        </ul>
        <ul className="flex items-center">
        <li className="p-2 px-3 hover:animate-pulsing">
            <Link href="/log" className="text-xl grid grid-cols-2 content-center">
              <FontAwesomeIcon className="h-7 justify-self-end px-1" icon={navIcons.circleUser} />
              <span className="self-center">logout</span>
              </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};
export default Nav;
