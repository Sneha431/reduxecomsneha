import React, { useState, useEffect } from "react";
import banner from "../images/banner.jpg";
import categoryImagesPromise from "../images/categories/";
import offerImagesPromise from "../images/offers";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Main = () => {
  const [categoryImages, setCategoryImages] = useState([]);
  const [categoryImagesoffer, setCategoryImagesoffer] = useState([]);
  useEffect(() => {
    const loadImages = async () => {
      const images = await categoryImagesPromise;
      setCategoryImages(images);
    };

    loadImages();
    const loadImagesoffers = async () => {
      const images = await offerImagesPromise;
      setCategoryImagesoffer(images);
    };

    loadImagesoffers();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <main>
      <div className="my-[40px]">
        <img src={banner} className="w-full" alt="Banner" />
      </div>
      <div className="uppercase font-bold text-slate-600 tracking-wide ml-6">heading</div>
      <div className="">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}

        >
          {categoryImages.map((item, index) => (
            <div key={index} className="">   <img src={item} alt={`Category ${index}`} className="w-[300px] h-[400px] box-content" /></div>

          ))}
        </Carousel>
      </div>
      <div className="uppercase font-bold text-slate-600 tracking-wide mt-6 ml-6">heading</div>
      <div className="flex flex-wrap justify-evenly">

        {categoryImagesoffer.map((item, index) => (
          <div key={index} className="">   <img src={item} alt={`Category ${index}`} className="w-[250px]" /></div>

        ))}

      </div>
    </main>
  );
};

export default Main;
