import React, { useEffect, useState } from "react";
import style from "../Styles/productStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removefromcart,
  removeall,
  updatecart,
  calculateTotal,
} from "../Store/CartSlice";

const Cart = () => {
  const { cartdata, totalamount } = useSelector((state) => state.cart);

  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();

  const incqty = (qty, id) => {
    console.log(qty, id);
    dispatch(updatecart({ quantity: qty, id: id, amount: 1 }));
  };
  const decqty = (qty, id) => {
    console.log(qty, id);
    if (qty > 1) {
      dispatch(updatecart({ quantity: qty, id: id, amount: -1 }));
    } else {
      dispatch(removefromcart(id));
    }
  };
  const removeitem = (id) => {
    dispatch(removefromcart(id));
  };
  const clearall = () => {
    dispatch(removeall());
  };

  return (
    <div>
      <button onClick={clearall}>Clear All</button>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {cartdata &&
            cartdata.map((item) => {
              return (
                <tr key={item.id}>
           
                  <td>#{item.id}</td>
                  {/* <td style={{backgroundImage:`url(${item.image})`, height:"120px",width:"120px",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></td> */}
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: "120px", width: "120px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => incqty(item.quantity, item.id)}>
                      +
                    </button>
                    <input
                      name="smtpPort"
                      type="number"
                      min="1"
                      value={item.quantity}
                      readOnly
                    />
                    <button onClick={() => decqty(item.quantity, item.id)}>
                      -
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeitem(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>Sub Total ${totalamount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
