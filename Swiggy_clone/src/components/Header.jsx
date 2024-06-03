import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { IoIosHelpCircle } from "react-icons/io";
import { BsBox2Fill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
import { CiGps } from "react-icons/ci";
import Commonsidebar from "./Commonsidebar";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [toggle, settoggle] = useState(false);
  const [item, setitem] = useState("");
  const toggleHandler = (val) => {
    settoggle(true);
    setitem(val);
  };
  const links = [
    {
      icon: <FiSearch size={20} />,
      name: "Search",
    },
    {
      icon: <FiUser size={20} />,
      name: "Sign In",
    },
    {
      icon: <BsBox2Fill size={15} />,
      name: "Swiggy Corporate",
    },
    {
      icon: <IoIosHelpCircle size={20} />,
      name: "Help",
    },
    {
      icon: <CiDiscount1 size={20} />,
      name: "Offer",
      sup: "NEW",
    },
    {
      icon: <GrCart />,
      name: "Cart",
    },
  ];
  return (
    <>
      {/* https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault */}
      {item === "order_item" ? (
        <Commonsidebar toggle={toggle} settoggle={settoggle}>
          <div className="max-w-[500px]">
            <div className="mx-auto  max-w-[440px] grid grid-cols-1 gap-7 p-10 lg:pl-20 lg:pt-12">
              <div>
                <RxCross1
                  className="cursor-pointer"
                  onClick={() => settoggle(false)}
                />
              </div>
              <input
                type="text"
                placeholder="Search for area and street name.."
                className="w-full font-semibold focus:shadow-xl border border-gray-300 p-3 outline-none  focus:pl-5 pl-5"
              />

              <div className="w-full font-semibold border border-gray-300 p-3 pl-5 flex gap-2 items-start justify-start">
                <span>
                  <CiGps size={22} />
                </span>
                <div className="flex flex-col justify-start">
                  <p className="text-md hover:text-[#fc8019] cursor-pointer">
                    Get current location
                  </p>
                  <p className="capitalize text-sm text-gray-400 font-light">
                    using gps
                  </p>
                </div>
              </div>

              <div className="w-full font-semibold border border-gray-300 p-3 pl-5 flex gap-2 items-center justify-start">
                <div className="flex flex-col justify-center ">
                  <p className="text-[10px] uppercase text-gray-500 font-light ml-9">
                    recent searches
                  </p>

                  <div className="flex-col gap-2 justify-center ">
                    <p className="capitalize text-sm  font-semibold flex gap-3 ">
                      <MdOutlineWatchLater size={22} />{" "}
                      <span className="hover:text-[#fc8019] cursor-pointer">
                        Ratananda
                      </span>
                    </p>
                    <p className="capitalize text-sm text-gray-400 font-light ml-8">
                      JodhPur , Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Commonsidebar>
      ) : (
        <Commonsidebar toggle={toggle} settoggle={settoggle} mdhidden={true}>
          <div className="float-right p-9 ">
            <RxCross1
              className="cursor-pointer"
              onClick={() => settoggle(false)}
            />
          </div>
          <nav className="gap-12 list-none space-y-10 font-semibold text-[16px] px-14  pt-20 flex-col item-center justify-center ">
            {links.map((link) => (
              <li
                className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                key={link.name}
              >
                {link.icon}
                {link.name}
                {link.sup && <sup>{link.sup}</sup>}
              </li>
            ))}
          </nav>
        </Commonsidebar>
      )}

      <header className="p-[15px] shadow-lg  text-[#3d4152] fixed w-full bg-white top-0 z-[40]">
        <div className="mx-auto max-w-[1200px]  flex items-center gap-10 ">
          <div className="w-8">
            <img
              src="/images/swiggy-logo.png"
              className="w-full cursor-pointer"
            />
          </div>
          <div className="text-[14px] ">
            <span className="font-bold border-b-[3px] flex-grow border-[black] border-spacing-4 hover:text-[#fc8019] cursor-pointer">
              Ratanada
            </span>
            <span className="text-gray-500 ml-2 cursor-pointer">
              Jodhpur, Rajasthan, India
              <PiCaretDownBold
                className="inline text-[#fc8019] text-xl ml-1 mb-1 cursor-pointer"
                onClick={() => toggleHandler("order_item")}
              />
            </span>
          </div>
          <div
            className="ml-auto flex lg:hidden  "
            onClick={() => toggleHandler("menu_item")}
          >
            <RiMenuFill className="" />
          </div>

          <nav className=" gap-12 ml-6 list-none font-semibold text-[16px] hidden lg:flex">
            {links.map((link) => (
              <li
                className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                key={link.name}
              >
                {link.icon}
                {link.name}
                {link.sup && <sup>{link.sup}</sup>}
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
