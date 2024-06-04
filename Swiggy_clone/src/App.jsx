import Category from "./components/Category";
import Cuisinenear from "./components/Cuisinenear";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Onlinedelivery from "./components/Onlinedelivery";

import Restnearme from "./components/Restnearme";
import Toprest from "./components/Toprest";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Category />
      <Toprest />
      <Onlinedelivery />
      <Restnearme />
      <Cuisinenear />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
