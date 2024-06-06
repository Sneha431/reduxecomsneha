"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
interface successmsg {
  $msg: String,
  $type: String

}
const Formdata = ({ title, id }) => {

  const [formdata, setformdata] = useState({ term: "", interpretation: "" });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<string | null>(null);
  const [success, setsuccess] = useState<successmsg | null>(null);
  const handleinputchangedata = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(formdata);
  }
  const router = useRouter();
  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formdata.terms == "" || formdata.interpretation == "") {
      setloading(false);
      seterror("Please fill in all the fields");
      return;
    }
    else {
      seterror(null);
      setloading(true);
      try {
        const response = await fetch("/api/interpretations", {
          method: "POST",
          headers: { 'Content-type': 'application/json' }, body: JSON.stringify(formdata)
        });

        if (response.ok) {
          setloading(false);
          const data = await response.json();
          setsuccess({ $msg: "Data added successfully", $type: "added" });
          setTimeout(() => (
            router.push("/")
          ), 1000)

        }
        else {
          seterror("Error in fetching data.Please try reloading the page.")
          throw new Error("Error in adding data")
        }

      } catch (error) {
        throw new Error("Error in adding data : ", error as Error);
      }

      finally {
        setloading(false)
      }
    }
  }
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = await fetch(`/api/interpretations/${id}`);

      if (response.ok) {
        setloading(false);
        const data = await response.json();
        setTimeout(() => {
          setsuccess({ $msg: "Data fetched successfully", $type: "fetched" });
        }, 2000);

        setformdata({ term: data.term, interpretation: data.interpretation });
        console.log(data)
      }
      else {
        seterror("Error in updating data.Please try reloading the page.")
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

      try {
        const response = await fetch(`/api/interpretations/${id}`)

        if (response.ok) {
          setloading(false);
          const data = await response.json();
          setformdata({ term: data.term, interpretation: data.interpretation })
          setsuccess({ $msg: "Data fetched successfully", $type: "updated" });

          console.log(data);
        }
        else {
          seterror("Error in fetching data.Please try reloading the page.")
          throw new Error("Error in updating data")
        }

      } catch (error) {
        throw new Error("Error in fetching data : ", error as Error);
      }

      finally {
        setloading(false)

      }

    }
    if (title === "Edit Tech") {
      fetchdata();
    }




  }, [])
  const updatedatafetch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formdata.terms == "" || formdata.interpretation == "") {
      setloading(false);
      seterror("Please fill in all the fields");
      return;
    }
    else {
      seterror(null);
      setloading(true);
      console.log("up" + formdata);
      try {
        const response = await fetch(`/api/interpretations/${id}`, {
          method: "PUT",
          headers: { 'Content-type': 'application/json' }, body: JSON.stringify(formdata),
        });

        if (response.ok) {
          setloading(false);
          const data = await response.json();
          setformdata({ term: data.term, interpretation: data.interpretation })
          setsuccess({ $msg: "Data updated successfully", $type: "updated" });
          fetchdata();

        }
        else {
          seterror("Error in updating data.Please try reloading the page.")
          throw new Error("Error in updating data")
        }

      } catch (error) {
        throw new Error("Error in updating data : ", error as Error);
      }

      finally {
        setloading(false)
        // fetchdata();
      }
    }

  }


  return (
    <div className="">

      {error && <p className="py-4 text-red-500">{error}</p>}
      {success && <div className="relative"><p className={`py-4 text-center  rounded-lg ${success.$type === "added" || "updated" ? "text-green-800 bg-green-200" :
        "text-red-800 bg-red-200"}`}>{success.$msg}</p>
        <p className="absolute text-green-800 top-0 right-2 text-xs p-2 cursor-pointer" onClick={() => setsuccess(null)}>X</p></div>}
      {loading && <p>Loading...</p>}
      <h1 className="font-bold">{title}</h1>
      <form className="flex flex-col space-y-6 py-4" onSubmit={title === "Edit Tech" ? updatedatafetch : handlesubmit}>
        <input type="text" name="term"
          className="border-2 border-slate-200 rounded-lg py-1 text-[15px] px-4 placeholder:font-semibold placeholder:text-[15px] outline-slate-400" placeholder="Term"
          value={formdata.term} onChange={handleinputchangedata} />
        <textarea className="border-2 border-slate-200 rounded-lg placeholder:font-semibold px-4 py-1 text-[15px] outline-slate-400"
          placeholder="Interpretation" rows={4} value={formdata.interpretation} onChange={handleinputchangedata} name="interpretation"></textarea>
        <button className="rounded-lg bg-gray-900 py-[4px] text-center text-slate-50 text-[16px]">{title}</button>
      </form>


    </div>
  )
}

export default Formdata
