import { useEffect } from "react";
import Header from "./Components/Header";
import JobCard from "./Components/JobCard";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import { db } from "./firebase.config";
// import jobdatas from "./jobDummyData"
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { useState } from "react";
function App() {
  const [jobdatas, setjobdatas] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const getdatafb = async () => {
    const jobarr = [];

    const jobref = query(collection(db, "jobs"));
    const q = query(jobref, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const postData = doc.data().postedOn;
      const postedOn = postData ? postData.toDate() : postData; // Check if postedOn exists

      jobarr.push({ ...doc.data(), id: doc.id, postedOn: postedOn });
    });
    console.log(jobarr);
    setjobdatas(jobarr);
  };

  const getdatafbcustom = async (jobcriteria) => {
    setCustomSearch(true);
    const jobarr = [];

    const jobref = query(collection(db, "jobs"));
    const q = query(jobref, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const postData = doc.data().postedOn;
      const postedOn = postData ? postData.toDate() : postData; // Check if postedOn exists

      jobarr.push({ ...doc.data(), id: doc.id, postedOn: postedOn });
      const filteredcontacts = jobarr.filter(
        (job) =>
          job.title.toLowerCase().includes(jobcriteria.title.toLowerCase()) &&
          job.type.toLowerCase().includes(jobcriteria.type.toLowerCase()) &&
          job.location
            .toLowerCase()
            .includes(jobcriteria.location.toLowerCase()) &&
          job.experience
            .toLowerCase()
            .includes(jobcriteria.experience.toLowerCase())
      );
      console.log(jobarr);
      setjobdatas(filteredcontacts);
    });
  };
  useEffect(() => {
    getdatafb();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />

        <Searchbar getdatafbcustom={getdatafbcustom} />
        {customSearch && (
          <button onClick={getdatafb} className="flex pl-[1250px] mb-2">
            <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
              Clear Filters
            </p>
          </button>
        )}
        {jobdatas.map((data) => (
          <JobCard key={data.id} {...data} />
        ))}
      </div>
    </>
  );
}

export default App;
