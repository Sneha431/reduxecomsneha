import dayjs from "dayjs";
import { useState } from "react";

const JobCard = (props) => {
  const date1 = dayjs(Date.now());
  const diffindays = date1.diff(props.postedOn, "day");
  console.log(diffindays);

  return (
    <div className="mx-40 mb-10">
      <div
        className="my-4 rounded-md px-6 py-6 flex bg-zinc-300 justify-between border border-black  shadow-md hover:border-blue-500  hover:translate-y-1 "
        key={props.id}
      >
        <div className="">
          <h1 className="text-lg font-semibold">
            {props.title}-{props.company}
          </h1>
          <p>
            {props.type} &bull; {props.experience} &bull; {props.location}
          </p>
          <div className="flex gap-2 items-center mt-2">
            {props.skills.map((skill, index) => (
              <p
                key={index}
                className="border-double border-4 cursor-pointer border-black  px-7 py-1 rounded-md"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className=" text-grey-300 font-light text-sm">
            Posted {diffindays > 1 ? `${diffindays} days ` : "a day"} ago
          </p>
          <a href={props.job_link}>
            <button className="border-2 border-blue-600 text-blue-600 rounded-md px-4 py-2 w-36">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
