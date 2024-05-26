import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="bg-[#2BC6D6]  p-4">
      <div className="max-w-[1240px] flex justify-between  items-center mx-auto py-2">
        <div className="text-4xl font-semibold">MySite</div>

        {toggle ? (
          <AiOutlineClose
            className="flex md:hidden  text-2xl text-white"
            onClick={() => settoggle(!toggle)}
          />
        ) : (
          <AiOutlineMenu
            className="flex md:hidden  text-2xl text-white"
            onClick={() => settoggle(!toggle)}
          />
        )}

        <ul className=" md:flex hidden gap-10 text-white">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <ul
          className={`${
            toggle ? "left-0" : "left-[-100%]"
          } md:hidden gap-10 text-white fixed bg-black top-[0px] w-[40%] h-screen   duration-300  opacity-75 pt-[5rem] `}
        >
          <li className="p-5 mt-2">Home</li>
          <li className="p-5">Home</li>
          <li className="p-5">Home</li>
          <li className="p-5">Home</li>
          <li className="p-5">Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
