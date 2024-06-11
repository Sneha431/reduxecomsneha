import { useState } from "react"
import data from "./data.js"

const Accordian = () => {
  const [selected, singleselected] = useState(null);
  const [enablemuliselection, setenablemuliselection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  // const [toggle, settoggle] = useState(false);
  const handlesingleSelection = (id) => {
    singleselected(id === selected ? null : id)
    // settoggle(!toggle)
  }
  const handlemultiSelection = (id) => {
    let copymultiple = [...multiple];
    const findbyindex = copymultiple.indexOf(id);
    if (findbyindex === -1) {
      copymultiple.push(id)
    }
    else {
      copymultiple.splice(findbyindex, 1)
    }
    console.log(multiple)
    setmultiple(copymultiple);
  }
  return (
    <div className="m-auto max-w-3xl">
      <button className="bg-slate-400 mb-2 p-2" onClick={() => setenablemuliselection(!enablemuliselection)}>Enable Multi Selection</button>
      {data && data.length > 0 ? data.map((dataitem, index) =>
        <div key={index} className="flex flex-col  bg-slate-400 py-4 gap-2 mb-0">
          <div className="flex justify-center cursor-pointer items-center" onClick={enablemuliselection ? () => handlemultiSelection(dataitem.id) : () => handlesingleSelection(dataitem.id)}>
            <h3 className="flex-1">{dataitem.question}</h3>
            <span className="pr-2">+</span>
          </div>
          {/* {selected === dataitem.id || multiple.indexOf(dataitem.id) == 1 && <div className="bg-slate-300 py-6">{dataitem.answer}</div>} */}
          {enablemuliselection ? multiple.indexOf(dataitem.id) !== -1 && <div className="bg-slate-300 py-6">{dataitem.answer}</div> : selected === dataitem.id && <div className="bg-slate-300 py-6">{dataitem.answer}</div>}
        </div>) :
        <p>Not found</p>}

    </div>
  )
}

export default Accordian
