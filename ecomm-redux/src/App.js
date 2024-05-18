import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Product/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">

<RouterProvider router={router}/>
    </div>
  );
}

export default App;
