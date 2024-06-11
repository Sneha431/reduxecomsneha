import { useState } from "react"


const RandomColor = () => {
  const [typeofcolor, settypeofcolor] = useState('hex');
  const [color, setcolor] = useState("#645f5f");
  const handlecreatecolor = () => {
    let colorvar = "#";
    if (typeofcolor === "hex") {
      for (let i = 0; i < 6; i++) {

        colorvar += Math.floor(Math.random() * 10);

      }
      console.log(color);
      setcolor(colorvar);
    }
    else if (typeofcolor === "rgb") {

      let colorvar = "rgb(";
      for (let i = 0; i < 3; i++) {

        colorvar += Math.floor(Math.random() * 10);
        colorvar += ","

      }
      colorvar = colorvar.slice(0, -1);
      let newcolor = colorvar.concat(")");
      console.log(newcolor);
      setcolor(newcolor);
    }

  }
  return (
    <div className="w-full h-[100vh] flex flex-col  p-4" style={{ backgroundColor: color }}>
      <div className="flex gap-2 justify-center">

        <button onClick={() => settypeofcolor("hex")} className="bg-slate-500">Create Hex Color</button>
        <button onClick={() => settypeofcolor("rgb")} className="bg-slate-500">Create RGB Color</button>
        <button onClick={handlecreatecolor} className="bg-slate-500">Generate Random Color</button>


      </div>
      <div className="flex items-center justify-center text-white" >{typeofcolor}:{color}</div>
    </div>
  )
}

export default RandomColor
