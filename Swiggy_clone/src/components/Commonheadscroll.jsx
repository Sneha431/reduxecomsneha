import React from "react";
import {
  GrLinkDown,
  GrLinkNext,
  GrLinkPrevious,
  GrLinkUp,
} from "react-icons/gr";

const Commonheadscroll = ({
  prevshift,
  shift,
  nextshift,
  category,
  button,
  text,
  margin,
  orientationbtntb,
}) => {
  return (
    <div className={`w-full flex justify-between ${margin ? "mt-24" : ""}`}>
      <div className="text-xl md:text-2xl font-bold ml-8">{text}</div>
      {button && (
        <>
          {orientationbtntb ? (
            <>
              <div className="md:hidden flex items-center gap-2 mr-8">
                {" "}
                <div
                  onClick={prevshift}
                  className="bg-[#e2e2e7] rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                >
                  <button
                    disabled={shift <= 0 ? true : false}
                    className="disabled:opacity-50"
                  >
                    <GrLinkUp />
                  </button>
                </div>
                <div
                  onClick={nextshift}
                  className="bg-[#e2e2e7]  disabled:bg-slate-600 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                >
                  <button
                    disabled={category.length - shift < 17 ? true : false}
                    className="disabled:opacity-50"
                  >
                    <GrLinkDown />
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 mr-8">
                {" "}
                <div
                  onClick={prevshift}
                  className="bg-[#e2e2e7] rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                >
                  <button
                    disabled={shift <= 0 ? true : false}
                    className="disabled:opacity-50"
                  >
                    <GrLinkPrevious />
                  </button>
                </div>
                <div
                  onClick={nextshift}
                  className="bg-[#e2e2e7]  disabled:bg-slate-600 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                >
                  <button
                    disabled={category.length - shift <= 8 ? true : false}
                    className="disabled:opacity-50"
                  >
                    <GrLinkNext />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2 mr-8">
              {" "}
              <div
                onClick={prevshift}
                className="bg-[#e2e2e7] rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
              >
                <button
                  disabled={shift <= 0 ? true : false}
                  className="disabled:opacity-50"
                >
                  <GrLinkPrevious />
                </button>
              </div>
              <div
                onClick={nextshift}
                className="bg-[#e2e2e7]  disabled:bg-slate-600 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
              >
                <button
                  disabled={category.length - shift <= 8 ? true : false}
                  className="disabled:opacity-50"
                >
                  <GrLinkNext />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Commonheadscroll;
