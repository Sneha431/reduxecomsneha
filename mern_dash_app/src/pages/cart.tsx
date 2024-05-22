import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productID: "1",
    productName: "a",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 23,
    stock: 12
  },
  {
    productID: "2",
    productName: "ab",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 25,
    stock: 14
  },
  {
    productID: "3",
    productName: "acc",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 29,
    stock: 19
  },
  {
    productID: "1",
    productName: "a",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 23,
    stock: 12
  },
  {
    productID: "2",
    productName: "ab",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 25,
    stock: 14
  },
  {
    productID: "3",
    productName: "acc",
    productImg: "https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    productPrice: 29,
    stock: 19
  }];
const subtotal = 4000;
const shippingcharges = 400;
const tax = Math.round(subtotal * 0.6);
const discount = 20;
const total = (subtotal + shippingcharges + tax) - discount;

const Cart = () => {
  const [couponCode, setCouponcode] = useState<string>("");
  const [isvalidcouponCode, setisvalidcouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      if (Math.random() > 0.5) setisvalidcouponCode(true)
      else setisvalidcouponCode(false)
    }, 1000);
    return () => {
      clearTimeout(timeoutid)
      setisvalidcouponCode(false)
    }
  }, [couponCode])

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (cartItems.map((i, index) => (
          <CartItem key={index} cartItem={i} />
        ))) : (<h1>No its added</h1>)}
      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shippingcharges: ${shippingcharges}</p>
        <p>Tax: ${tax}</p>
        <p>Discount -<em className="red">${discount}</em></p>
        <p><b>Total: ${total}</b></p>
        <input type="text" value={couponCode} onChange={(e) => setCouponcode(e.target.value)} placeholder="Coupon Code" />
        {couponCode && (
          isvalidcouponCode ? <span className="green">${discount} off using ${couponCode} coupon code</span> : <span className="red">Invalid coupon code <VscError /></span>
        )}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div >
  )
}

export default Cart
