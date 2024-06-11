
import logo from "../images/myntra_logo.webp";
const Header = () => {
  const menuitem = ["Men", "Women", "Kids", "Home & Living", "Beauty"];
  const rightitem = [
    "<span class='material-symbols-outlined'>person</span><span>Profile</span>",
    "<span class='material-symbols-outlined '>favorite</span><span>Whistlist</span>",
    "<span class='material-symbols-outlined'>shopping_bag</span><span>Bag</span>",
  ]
  return (
    <header className="flex h-[80px] justify-between items-center shadow-md max-w-screen-2xl w-full">
      <div className="logo_container ml-[4%]">
        <a href="#">
          <img src={logo} alt="Myntra" className="h-[45px]" />
        </a>
      </div>
      <nav className="flex justify-between min-w-[500px]  text-[13px] tracking-[0.3px] uppercase text-slate-800 font-bold duration-700">
        {menuitem.map((item, index) => <a href="#" key={index} className="hover:border-b-2 border-b-pink-700 py-[30px]">{item}</a>)}

        <a href="#" className="hover:border-b-2 border-b-pink-700 py-[30px]">Studio<sup className="text-pink-500 text-[10px] ">New</sup></a>

      </nav>
      <div className="search_bar bg-gray-100 h-[40px] min-w-[200px] w-[30%] flex items-center rounded-tl-[3px] rounded-bl-[3px]">
        <span className="material-symbols-outlined text-slate-400  h-[20px] box-content p-2 ">Search</span>
        <input type="text" className="bg-transparent outline-none h-[40px] flex-1  rounded-tr-[3px] rounded-br-[3px]px-2" placeholder="Search for products,brands and more" />
      </div>
      <div className=" mr-[4%] flex items-center gap-2 justify-between">
        {rightitem.map((item, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: item }} className="p-2 flex flex-col justify-center items-center" />
        ))}
      </div>

    </header >
  )
}

export default Header
