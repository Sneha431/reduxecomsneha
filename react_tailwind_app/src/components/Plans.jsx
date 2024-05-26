import Single from "../assets/image.png";
const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className="md:grid grid-cols-3 space-y-16 md:gap-3 max-w-[1240px] mx-auto">
        <div className="col-span-1 shadow-xl h-[500px] hover:scale-105 duration-500 bg-white flex flex-col">
          <img
            className="w-20 mx-auto  mt-[-2rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 mx-auto">
            Web development
          </h2>
          <h2 className="text-4xl font-bold text-center py-2 mx-auto">$149</h2>
          <div className="text-center font-2xl font-medium space-y-6 max-w-[300px] mx-auto mt-3">
            <p className="border-b text-wrap">Lorem Ipsum is simply </p>
            <p className="border-b text-wrap">
              Lorem Ipsum is simply lorem Ipsum is simply
            </p>
            <p className="border-b text-wrap">Lorem Ipsum is simply</p>
          </div>
          <button className="bg-green-500 p-3 rounded-lg text-sm font-medium  mx-auto w-[40%] mt-7">
            Start Trial
          </button>
        </div>
        <div className="col-span-1 shadow-xl h-[500px] bg-slate-100 md:mt-5 hover:scale-105 duration-500 flex flex-col">
          <img
            className="w-20 mx-auto  mt-[-2rem] bg-transparent"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 mx-auto">
            Web development
          </h2>
          <h2 className="text-4xl font-bold text-center py-2 mx-auto">$149</h2>
          <div className="text-center font-2xl font-medium space-y-6 max-w-[300px] mx-auto mt-3">
            <p className="border-b text-wrap">Lorem Ipsum is simply </p>
            <p className="border-b text-wrap">
              Lorem Ipsum is simply lorem Ipsum is simply
            </p>
            <p className="border-b text-wrap">Lorem Ipsum is simply</p>
          </div>
          <button className="bg-green-500 p-3 rounded-lg text-sm font-medium  mx-auto w-[40%] mt-7">
            Start Trial
          </button>
        </div>
        <div className="col-span-1 shadow-xl h-[500px] hover:scale-105 duration-500 flex flex-col">
          <img
            className="w-20 mx-auto  mt-[-2rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 mx-auto">
            Web development
          </h2>
          <h2 className="text-4xl font-bold text-center py-2 mx-auto">$149</h2>
          <div className="text-center font-2xl font-medium space-y-6 max-w-[300px] mx-auto mt-3">
            <p className="border-b text-wrap">Lorem Ipsum is simply </p>
            <p className="border-b text-wrap">
              Lorem Ipsum is simply lorem Ipsum is simply
            </p>
            <p className="border-b text-wrap">Lorem Ipsum is simply</p>
          </div>
          <button className="bg-green-500 p-3 rounded-lg text-sm font-medium  mx-auto w-[40%] mt-7">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
