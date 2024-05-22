import { useState } from "react";

const Searchbar = (props) => {
  const [jobCriteria, setjobCriteria] = useState({
    title: "Frontend Developer",
    location: "In-Office",
    experience: "Fresher",
    type: "Part Time",
  });
  //  title: "Frontend Developer",
  //     location: "In-Office",
  //     experience: "Fresher",
  //     type: "Part Time",
  const changeHandler = (e) => {
    setjobCriteria((prevval) => ({
      ...prevval,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(jobCriteria);
  const submithandler = async () => {
    await props.getdatafbcustom(jobCriteria);
  };
  return (
    <div className="flex gap-5 justify-center m-auto px-10 my-10">
      <select
        className="w-64 py-3 px-4  bg-zinc-200 font-semibold rounded-md"
        onChange={changeHandler}
        name="title"
        value={jobCriteria.title}
      >
        <option disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer" selected>
          iOS Developer
        </option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select
        className="w-64 py-3 px-4  bg-zinc-200 font-semibold rounded-md"
        onChange={changeHandler}
        name="type"
        value={jobCriteria.type}
      >
        <option disabled hidden>
          Job Type
        </option>
        <option value="Full Time" selected>
          Full Time
        </option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        className="w-64 py-3 px-4  bg-zinc-200 font-semibold rounded-md"
        onChange={changeHandler}
        name="location"
        value={jobCriteria.location}
      >
        <option disabled hidden>
          Location
        </option>
        <option value="Remote" selected>
          Remote
        </option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        className="w-64 py-3 px-4  bg-zinc-200 font-semibold rounded-md"
        onChange={changeHandler}
        name="experience"
        value={jobCriteria.experience}
      >
        <option disabled hidden>
          Experience
        </option>
        <option value="Fresher" selected>
          Fresher
        </option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button
        className="w-64 font-bold rounded-md  bg-blue-500 text-white px-4"
        onClick={submithandler}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
