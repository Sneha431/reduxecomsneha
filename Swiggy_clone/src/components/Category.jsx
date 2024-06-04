import React, { useEffect, useRef, useState } from "react";
import WrapperContainer from "./WrapperContainer";

import Commonheadscroll from "./Commonheadscroll";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const Category = () => {
  const [category, setcategory] = useState([]);
  const [shift, setshift] = useState(0);

  useEffect(() => {
    const fetchcategory = async () => {
      const response = await fetch("./category.json");
      const categorydata = await response.json();
      setcategory(categorydata);
    };
    fetchcategory();
  }, []);
  const nextshift = () => {
    if (category.length - shift <= 8) {
      return false;
    }
    setshift(shift + 3);
  };
  const prevshift = () => {
    setshift(shift - 3);
  };
  const mainStyle = css({
    "@media (min-width: 767px)": {
      transform: `translateX(-${shift * 100}%)`,
      transitionDuration: "700ms",
    },
  });

  const mediaQueryStyle = css({
    "@media (max-width: 767px)": {
      // Adjusted max-width for mobile devices
      transform: `translateY(-${shift * 100}%)`,
      transitionDuration: "700ms",
    },
  });

  return (
    <WrapperContainer>
      <Commonheadscroll
        prevshift={prevshift}
        shift={shift}
        nextshift={nextshift}
        category={category}
        button={true}
        text={"What's on your mind?"}
        margin={true}
        orientationbtntb={true}
      />

      <div className="grid grid-flow-row grid-cols-3 h-[190px] md:h-[120px] md:flex overflow-hidden mx-6  md:mx-0">
        {category.map((cat) => (
          <div
            key={cat.path}
            css={[mainStyle, mediaQueryStyle]}
            className="w-[80px] md:w-[130px]  shrink-0 duration-1000 md:duration-700 mt-0"
          >
            <img src={`/images/${cat.image}`} className="" />
          </div>
        ))}
      </div>
      <hr className="my-6 border-[1px]" />
    </WrapperContainer>
  );
};

export default Category;
