import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-[#2BC6D6] p-4 w-full">
      <div className="max-w-[1240px] md:flex  mx-auto justify-between py-12 md:space-y-0 space-y-5">
        <div className="">
          <h1 className="text-white text-4xl md:text-3xl font-bold">
            Lorem ipsum dolor sit?
          </h1>
          <p className="text-white text-lg md:text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="">
          <input
            type="text"
            className="text-md md:text-lg p-3 text-gray mr-2"
            placeholder="Email"
          />
          <button className="capitalize bg-black text-white font-semibold text-md md:text-lg p-3 rounded-md">
            Get started
          </button>
          <p className="text-white">
            Lorem ipsum dolor sit amet,consectetur consectetur
            <br />
            <Link to="/" className="text-blue-950">
              {" "}
              adipisicing
            </Link>{" "}
            elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
