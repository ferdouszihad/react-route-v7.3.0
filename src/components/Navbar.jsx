import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isNavopen, setisNavOpen] = useState(false);
  const navmenu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="bg-gray-50 py-5 px-4 shadow flex justify-between items-center relative">
      <div className="logo flex items-center">
        <img
          src="https://img.icons8.com/?size=96&id=pTU9snWsqE2j&format=png"
          alt=""
          className="w-10 h-10"
        />
        <h2 className="text-lg font-bold">Products.io</h2>
      </div>
      <div className="nav">
        <ul className="hidden lg:flex space-x-4 ">
          {navmenu.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-gray-800">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="block lg:hidden">
          <MdMenu
            onClick={() => setisNavOpen(!isNavopen)}
            className="cursor-pointer text-3xl z-20 relative"
          ></MdMenu>
          <ul
            className={`space-x-4  absolute glass z-10 top-20 left-0   w-full  ${
              isNavopen
                ? "block animate__animated animate__fadeInRight"
                : "hidden"
            }`}
          >
            {navmenu.map((item, index) => (
              <li key={index} className="border-b-2 border-gray-300 py-2 px-3">
                <a href={item.link} className="">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
