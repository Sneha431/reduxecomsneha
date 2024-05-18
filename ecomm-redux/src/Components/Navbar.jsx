import React, { useEffect, useState } from 'react'
import "../Styles/navbarStyle.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchsearchProducts ,} from '../Store/ProductSlice';

const Navbar = () => {
  const [toggle,settoggle]=useState(false);
  const {cartdata} = useSelector(state=>state.cart);

  const[search,setsearch]=useState([]);
  const dispatch = useDispatch();
const setsearchdata = (search) =>{
  setsearch(search);
  dispatch(fetchsearchProducts(search))
}
  
  return (
    <div className='navbar'>
       <div className='ulmobnavbar' onClick={()=>settoggle(!toggle)}>☰
    {toggle  && <ul className='ulnavmob'>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/product">Product</Link></li>
     
    </ul>
}
    
    </div> 
    <ul className='ulnav'>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/product">Product</Link></li>
     
    </ul>
    <ul className='ulsearch'>

      <li><input type="search" value={search} onChange={(e)=>setsearchdata(e.target.value)}/><button className='searchbtn' onClick={()=>setsearchdata(search)}>Search</button></li>
      
    </ul>
   
   <div className='carticon'>
   <Link to="/cart" style={{textDecoration: "none",
    color: "black"}}>Cart({cartdata && cartdata.length}) 🛒</Link> 
   </div>
    </div>
    
  )
}

export default Navbar
