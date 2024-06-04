import Restaurantnear from "./Restaurantnear"


const Restnearme = () => {
  const restaurant = [
    "Rajkot", "Varanasi", "Ludhiana", "New Delhi", "Aurangabad", "Patna", "Delhidsdsdsdsddsdsd", "Ujjain", "Amritsar", "Bhopal", "Surat", "Visakhapatnam"
  ]
  return <Restaurantnear restaurant={restaurant} title={"Best Places to Eat Across Cities"} type="Restaurants" />
}

export default Restnearme
