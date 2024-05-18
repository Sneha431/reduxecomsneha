import React, { useEffect, useState } from "react";
import style from "../Styles/productStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { getProducts } from "../Store/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StatusCode } from "../Util/StatusCode";
const Product = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const{searchdata}= useSelector(state=>state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
   
  }, []);

  const addtocart = (item) => {
    dispatch(add(item));
  };
  if (status === StatusCode.loading) {
    toast.success("Loading......");
  }
  if (status === StatusCode.error) {
    toast.error("Something went wrong..");
  }
 


  return (
    <div className={style.maindiv}>
      <ToastContainer />
   
      {products.length > 0 && 
      products.filter((item)=> { return searchdata.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchdata.toLowerCase())}).map((item) => {
       console.log(item)
          return (
            <div key={item.id} className={style.productitem}>
            <h3>{item.title}</h3>
           
              <div
                className={style.productimg}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className={style.productcontent}>
                <div className={style.contentindv}>
                  <p>{item.description.slice(0, 170)}...</p>
                </div>
                <div className={style.ratingdiv} key={item.id}>
                  <p>
                    {" "}
                    {[...Array(Math.floor(item.rating.rate))].map(
                      (star, index) => {
                        return (
                          <span
                            className="star"
                            style={{
                              color: item.rating.rate ? "#ffc107" : "#e4e5e9",
                            }}
                          >
                            ★
                          </span>
                        );
                      }
                    )}
                    {[...Array(parseInt(5 - Math.floor(item.rating.rate)))].map(
                      (star, index) => {
                        return (
                          <span
                            className="star"
                            style={{
                              color:
                                5 - Math.floor(item.rating.rate)
                                  ? "#ffc107"
                                  : "#e4e5e9",
                            }}
                          >
                            ✰
                          </span>
                        );
                      }
                    )}{" "}
                    {item.rating.rate}({item.rating.count})
                  </p>
                </div>

                <div className={style.pricediv}>
                  <span>Price - ${item.price}</span>
                  <button onClick={() => addtocart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
