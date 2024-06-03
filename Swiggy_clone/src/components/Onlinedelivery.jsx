import { useEffect, useRef, useState } from "react";
import Commonheadscroll from "./Commonheadscroll";
import Card from "./Card";
import WrapperContainer from "./WrapperContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { BulletList } from "react-content-loader";
const Onlinedelivery = () => {
  const [category, setcategory] = useState([]);
  const [shift, setshift] = useState(0);
  const [isTop, setTop] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const elementref = useRef();
  const fetchcatemore = () => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch("./restaurantChains.json");
          const categorydata = await response.json();
          resolve(categorydata);
        } catch (error) {
          reject(error);
        }
      }, 3000);
    });
  };

  const fetchcategory = async () => {
    try {
      const categorydata = await fetchcatemore();
      setcategory([...category, ...categorydata]);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const nextshift = () => {
    console.log(category.length - shift);
    if (category.length - shift <= 8) {
      return false;
    }
    setshift(shift + 6);
  };
  const prevshift = () => {
    setshift(shift - 6);
  };

  useEffect(() => {
    function onscroll() {
      const element = elementref.current && elementref.current;
      const rect = element.getBoundingClientRect();
      setTop(rect.top <= 0);
    }
    window.addEventListener("scroll", onscroll);
  }, []);

  return (
    <WrapperContainer>
      <Commonheadscroll
        prevshift={prevshift}
        shift={shift}
        nextshift={nextshift}
        category={category}
        text={"Restaurants with online food delivery in Kolkata"}
        orientationbtntb={false}
      />
      <div
        className={`${
          isTop
            ? "mx-auto fixed top-0 z-[40] bg-white w-full left-0 p-[15px] shadow-lg  text-[#3d4152] duration-100"
            : "mt-2 ml-8"
        }`}
      >
        <div className="flex grow gap-3">
          <div className="p-3 rounded-xl shadow">Filter</div>
          <div className="p-3 rounded-xl shadow">Sort By</div>
        </div>
      </div>
      <div ref={elementref}>
        <InfiniteScroll
          className="grid grid-cols-1 md:grid-cols-4 w-full overflow-hidden"
          style={{
            overflowX: "hidden",
          }}
          dataLength={category.length}
          next={fetchcategory} // Function to call when more data needs to be loaded
          hasMore={hasMore} // Boolean to indicate if more data is available
          loader={<BulletList className="ml-7" />} // Loader component
          endMessage={<p>No more items</p>} // Message to display when all data is loaded
        >
          {category.map((cat, index) => (
            <Card {...cat} key={index} shift={shift} />
          ))}
        </InfiniteScroll>
      </div>
    </WrapperContainer>
  );
};

export default Onlinedelivery;
