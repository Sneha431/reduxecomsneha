import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addrocart = () => {
    console.log("e");
  }
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products


        <Link to="/search" className="findmore">More</Link>

      </h1>

      <main>
        <ProductCard productID="1" productName="a" productImg="https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png" productPrice={23} stock={12} handler={addrocart} />
      </main>
    </div>

  )
}

export default Home
