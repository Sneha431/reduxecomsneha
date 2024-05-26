import language from "../assets/language.png";

const Info = () => {
  return (
    <div className="max-w-[1240px] mx-auto  md:grid grid-cols-3 p-2 my-6 ">
      <div className="col-span-1 w-full md:w-[80%]">
        <img
          src={language}
          alt="laptop"
          className=" w-full md:w-[80%] inline"
        />
      </div>
      <div className="flex flex-col  col-span-2 space-y-4 p-5 justify-center">
        <h1 className=" uppercase text-green-500 font-semibold text-md">
          Learn from experts
        </h1>
        <p className="text-lg  md:text-sm font-normal text-slate-950">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          provident cupiditate eos error iste suscipit amet, labore a
          consectetur reprehenderit sint delectus impedit hic eveniet asperiores
          explicabo aperiam adipisci officia?
        </p>
        <button className="capitalize bg-black text-white font-semibold text-md p-3 rounded-md w-[40%] md:w-[30%] xl:w-[20%]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Info;
