import { useEffect, useState } from "react";
import WrapperContainer from "./WrapperContainer";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Card from "./Card";
import Commonheadscroll from "./Commonheadscroll";

const Toprest = () => {
  const [category, setcategory] = useState([]);
  const [shift, setshift] = useState(0);
  useEffect(() => {
    const fetchcategory = async () => {
      const response = await fetch("./restaurantChains.json");
      const categorydata = await response.json();
      setcategory(categorydata);
    };
    fetchcategory();
  }, []);
  const nextshift = () => {
    if (category.length - shift <= 8) {
      return false;
    }
    setshift(shift + 6);
  };
  const prevshift = () => {
    setshift(shift - 6);
  };
  return (
    <WrapperContainer>
      <Commonheadscroll
        prevshift={prevshift}
        shift={shift}
        nextshift={nextshift}
        category={category}
        button={true}
        text={"Top restaurant chains in Kolkata"}
        orientationbtntb={false}
      />
      <div className="flex overflow-hidden  gap-5 ">
        {category.map((cat, index) => (
          <Card {...cat} key={index} shift={shift} />
        ))}
      </div>

      <hr className="my-6 border-[1px]" />
    </WrapperContainer>
  );
};

export default Toprest;
