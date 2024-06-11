import { useEffect, useState } from "react"
import { GoDot } from "react-icons/go";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [dotimage, setdotimageindex] = useState('0');
  const [dot, setdot] = useState(false);
  const [currentSlide, setcurrentSlide] = useState(0);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterrormsg] = useState(null);
  const [translatev, settranslatevg] = useState(0);
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const result = await response.json();
      if (result) {
        setdata(result);
        setloading(false);
        console.log(result);
      }

    } catch (error) {
      seterrormsg(error);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [url])

  const handleprev = () => {
    setdot(false)
    if (translatev === 0)
      return;
    settranslatevg(translatev + 100)
  }
  const handlenext = () => {
    setdot(false)
    if (Math.abs(translatev) === (data.length - 1) * 100)
      return;
    settranslatevg(translatev - 100)
  }
  const handledot = (index) => {

    setdot(true);
    console.log(index)

    setdotimageindex(index.toString())
  }
  return (
    <div>
      {loading && <p> Loading...</p>}
      {error && <p> Error occured:{error}</p>}


      <div className="flex gap-2 items-center">
        <div onClick={handleprev}>  <BsArrowLeftCircleFill size={50} /></div>
        <div className="flex overflow-hidden">

          {data && data.length > 0 && data.map((item) =>
            <>

              {dot ? (dotimage === item.id && <img src={item.download_url} key={item.id} className="transition-all duration-500" />) : (< img src={item.download_url} key={item.id} style={{ transform: `translateX(${translatev}%)` }} className="transition-all duration-500" />)}
            </>

          )}</div>

        <div onClick={handlenext}><BsArrowRightCircleFill size={50} /></div>
      </div>
      <span className="flex justify-center">{[...Array(data?.length)].map((_, index) => <div key={index} > <GoDot size={20} onClick={() => handledot(index)} /></div>)}</span>

    </div>
  )
}

export default ImageSlider
