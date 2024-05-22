import { FaPlus } from "react-icons/fa";


type ProductCard = {
  productID: string,
  productName: string,
  productImg: string,
  productPrice: number,
  stock: number,
  handler: () => void;
}
const ProductCard = ({ productID, productName, productImg, productPrice, stock, handler }: ProductCard) => {
  const server = "aaa";
  return (
    <div className="product-card">

      <img src={`${productImg}`} />
      <p>{productName}</p>
      <span>${productPrice}</span>

      <div>
        <button onClick={() => handler()}> <FaPlus /></button>

      </div>
    </div>
  )
}

export default ProductCard
