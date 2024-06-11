
import './App.css'
import Accordian from './Components/Accordian'
import ImageSlider from './Components/Image_Slider'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/Start_Ratings'



const App = () => {
  return (
    <div>
      <Accordian />
      <br />
      <RandomColor />
      <StarRating nos={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} />
    </div>
  )
}

export default App
