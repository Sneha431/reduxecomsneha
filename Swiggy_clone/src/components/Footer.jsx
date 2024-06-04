import { useEffect, useRef, useState } from "react";
import Footerdown from "./Footerdown";
import Footerup from "./Footerup";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const Footer = () => {
  const [down, setdownstate] = useState(false);
  const footref = useRef();
  const godown = (e) => {
    e.preventDefault();

    footref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setdownstate(true));

    return () => {
      window.addEventListener("scroll", () => setdownstate(false));
    };
  }, []);
  return (
    <div className="flex flex-col mt-5 lg:mt-28">
      {down && (
        <button
          className="bg-gray-400 fixed bottom-3 right-3 mr-2 rounded-full p-3  text-gray-800 md:z-[9999999]"
          onClick={godown}
        >
          <RiArrowDownDoubleFill className="size-5" />
        </button>
      )}
      <Footerup />
      <Footerdown footref={footref} />
    </div>
  );
};

export default Footer;
