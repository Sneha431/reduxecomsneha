import Restaurantnear from "./Restaurantnear"


const Explore = () => {
  const restaurant = [
    "Explore", "Explore Top"
  ]
  return <Restaurantnear restaurant={restaurant} title={"Explore Every Restaurants Near Me"} type="Restaurants" gridtype="2" />
}

export default Explore
