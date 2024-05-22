import { useState } from 'react'
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = { _id: "dd", role: "admin" }
  const [isOpen, setopen] = useState<boolean>(false);
  const logouthandler = () => {
    setopen(false);
  }
  return (
    <nav className='header'>
      <Link to={"/"} onClick={() => setopen(false)}>Home</Link>
      <Link to={"/search"} onClick={() => setopen(false)}><FaSearch /></Link>
      <Link to={"/cart"} onClick={() => setopen(false)}><FaShoppingBag /></Link>
      {user?._id ?
        <>
          <button onClick={() => setopen((prev) => !prev)}><FaUser /></button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (<Link to={"/admin/dashboard"}>Admin</Link>)}
              <Link to={"/orders"} onClick={() => setopen(false)}>Orders</Link>
              <button onClick={logouthandler}><FaSignOutAlt /></button>
            </div>
          </dialog></>

        :
        <Link to={"/login"}> <FaSignInAlt /></Link>}
    </nav>
  )
}

export default Header
