import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Provider } from 'react-redux';
import {store,persistor} from '../Store/mystore.js';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const RootLayout = () => {

  return (
    <div>
       <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={toast('Loading product data..!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light"
})}>
 
        <Navbar/>
      <main>
        <Outlet/>
      </main>
        </PersistGate>
    
      </Provider>
     
    </div>
  )
}

export default RootLayout
