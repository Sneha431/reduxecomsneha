import React from "react";

const Footerdown = () => {
  return (
    <div className="bg-slate-950 py-12 md:grid  md:grid-cols-9 justify-items-center text-white px-12 md:px-36 space-y-5 md:space-y-0">
      <div className="rounded-lg p-2 flex flex-col gap-2 space-x-0 justify-items-center col-span-4">
        <div className="flex gap-2">
          {" "}
          <img
            src="/images/swiggy-logo.png"
            className="w-full max-w-[22px] rounded-lg "
          />
          <h1 className="text-2xl font-bold mt-0 self-start">Swiggy</h1>
        </div>

        <p className="text-[#ffffff99]">© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>

      <div className="col-span-1">
        <h1 className="text-lg text-white font-semibold">Company</h1>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div className="col-span-1">
        <h1 className="text-lg text-white font-semibold">Company</h1>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div className="col-span-1">
        <h1 className="text-lg text-white font-semibold">Company</h1>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
      <div className="md:col-span-9 ">
        <h1 className="text-lg text-white font-semibold md:mt-11">Company</h1>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </div>
  );
};

export default Footerdown;
