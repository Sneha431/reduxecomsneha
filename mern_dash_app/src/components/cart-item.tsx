import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { productID, productName, productImg, productPrice, quantity = 3 } = cartItem;
  return (
    <div className="cart-item">
      <img src={productImg} alt={productName} />
      <article>
        <Link to={`/product/${productID}`}>{productName}</Link>
        <span>${productPrice}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button><FaTrash /></button>
    </div>
  )
}

export default CartItem
