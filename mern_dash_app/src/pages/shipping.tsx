import { useState } from "react";
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setsshippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: ""
  })
  const onchangehandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setsshippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(shippingInfo)
  }
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form onSubmit={submitHandler}>
        <h1>Shipping Address</h1>

        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={onchangehandler}

        />

        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={onchangehandler}
        />

        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={onchangehandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={onchangehandler}

        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
        </select>

        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          onChange={onchangehandler}
          value={shippingInfo.pinCode}

        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping
