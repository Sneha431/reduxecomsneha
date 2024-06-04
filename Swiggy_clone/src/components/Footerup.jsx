import React from "react";
import ButtonEl from "./ButtonEl";

const Footerup = () => {
  return (
    <div className="bg-slate-100 p-12 lg:flex md:items-center justify-center space-y-6 lg:space-y-3">
      <div className="md:w-[500px]">
        <h1 className=" text-xl md:text-3xl font-bold break-words text-slate-800">
          For better experience,download the Swiggy app now
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:w-[500px] justify-start gap-4 md:gap-5">
        <ButtonEl
          btntitle={"GET IT ON"}
          btntype={"Google Play"}
          btnimg={"googleplay.png"}
        />
        <ButtonEl
          btntitle={"Download on the"}
          btntype={"App Store"}
          btnimg={"apple.png"}
        />
      </div>
    </div>
  );
};

export default Footerup;
