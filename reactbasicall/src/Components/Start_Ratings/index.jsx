
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({ nos }) => {
  console.log(nos)
  const [hover, sethover] = useState(0);
  const [rating, setrating] = useState(0);
  const handleclick = (index) => {
    console.log("c;ick" + index)
    setrating(index);
  }
  const handlemouseenter = (index) => {
    console.log("hover" + index)
    sethover(index);

  }
  const handlemouseleave = () => {
    console.log("leave" + rating)
    sethover(rating);
  }
  return (
    <div className="flex">
      {
        [...Array(nos)]
          .map((_, index) => {
            index += 1
            return <FaStar key={index} className={index <= (hover || rating) ? "text-yellow-300" : "text-black"} onClick={() => handleclick(index)}
              onMouseEnter={() => handlemouseenter(index)} onMouseLeave={() => handlemouseleave(index)} size={40} />
          })
      }
    </div>
  )
}

export default StarRating
