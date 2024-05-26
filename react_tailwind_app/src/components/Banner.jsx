import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2BC6D6]   py-28  w-full">
      <div className="max-w-[1240px] mx-auto  text-center space-y-4 font-bold">
        <div className=" text-2xl md:text-4xl">Learn with us</div>
        <h2 className="text-3xl  md:text-6xl text-white">Grow with us.</h2>
        <div className="text-npm i react-typedxl md:text-3xl text-white  capitalize">
          Learn
          <ReactTyped
            strings={["Web Development with us", "Ethical Hacking with us"]}
            typeSpeed={100}
            backSpeed={100}
            loop
            className=" pl-2"
          />
        </div>
        <button className="capitalize bg-black text-white font-semibold text-md md:text-xl p-3 rounded-md">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Banner;
