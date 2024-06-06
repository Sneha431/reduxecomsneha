"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface Interpretations {
  $id: String,
  $term: String,
  $interpretation: String,

}
interface successmsg {
  $msg: String,
  $type: String

}
export default function Home() {
  const [interpretationdata, setinterpretation] = useState<Interpretations[]>();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<string | null>(null);
  const [success, setsuccess] = useState<successmsg | null>(null);
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = await fetch("/api/interpretations");

      if (response.ok) {
        setloading(false);
        const data = await response.json();
        setTimeout(() => {
          setsuccess({ $msg: "Data fetched successfully", $type: "fetched" });
        }, 2000);

        setinterpretation(data["documents"]);
        console.log(data["documents"])
      }
      else {
        seterror("Error in fetching data.Please try reloading the page.")
        throw new Error("Error in fetching data")
      }

    } catch (error) {
      throw new Error("Error in fetching data : ", error as Error);
    }

    finally {
      setloading(false)
    }
  }
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      try {
        const response = await fetch("/api/interpretations");

        if (response.ok) {
          setloading(false);
          const data = await response.json();
          setsuccess({ $msg: "Data fetched successfully", $type: "fetched" });
          setinterpretation(data["documents"]);
          console.log(data["documents"])

        }
        else {
          seterror("Error in fetching data.Please try reloading the page.")
          throw new Error("Error in fetching data")
        }

      } catch (error) {
        throw new Error("Error in fetching data : ", error as Error);
      }

      finally {
        setloading(false)
      }
    }
    fetchdata();

  }, [])
  const handledel = async (id: String) => {

    setloading(true);
    try {
      const response = await fetch(`/api/interpretations/${id}`, { method: "DELETE" });
      if (response.ok) {
        setsuccess({ $msg: "Data deleted successfully", $type: "deleted" });

      } else {
        seterror("Error in fetching data.Please try reloading the page.")
        throw new Error("Error in fetching data")
      }

    } catch (error) {
      throw new Error("Error in fetching data : ", error as Error);
    }

    finally {
      fetchdata();
      setloading(false)
    }
  }
  return (
    <div className="">
      {error && <p className="py-4 text-red-500">{error}</p>}
      {success && <div className="relative"><p className={`py-4 text-center  rounded-lg ${success.$type === "fetched" ? "text-green-800 bg-green-200" : "text-red-800 bg-red-200"}`}>{success.$msg}</p><p className="absolute text-green-800 top-0 right-2 text-xs p-2 cursor-pointer" onClick={() => setsuccess(null)}>X</p></div>}
      {loading ? <p>Loading...</p> :
        <div className="mx-auto p-4 leading-7">
          {interpretationdata && interpretationdata.length > 0 ? interpretationdata?.map((interpretationdata, index) =>
          (<div key={index} className="mx-auto  border-b  p-4 leading-7">
            <div className="font-bold  py-4">
              {interpretationdata.term}
            </div>
            <div className="text-slate-900 font-medium ">
              {interpretationdata.interpretation}</div>
            <div className="flex justify-end gap-2">
              <Link href={`/edit/${interpretationdata.$id}`} className="bg-gray-300 rounded-lg px-4 py-2 text-slate-800 text-sm uppercase font-semibold tracking-widest">Edit
              </Link>
              <button onClick={() => handledel(interpretationdata.$id)} className="bg-red-600 rounded-lg px-4 py-2 text-slate-50 uppercase text-sm font-semibold tracking-widest">Delete</button>
            </div>
          </div>)) : (<p className="mx-auto text-xl text-center font-bold">No interpretation found</p>)}
        </div>
      }

    </div>
  );
}
