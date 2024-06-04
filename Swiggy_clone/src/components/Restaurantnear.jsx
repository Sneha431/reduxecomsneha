import WrapperContainer from "./WrapperContainer"


const Restaurantnear = ({ restaurant, title, type, gridtype }) => {


  return (
    <WrapperContainer>
      <div className="mt-12 flex flex-col">
        <h1 className="text-2xl font-bold tracking-tighter text-center md:text-left ">{title} </h1>
        <div className={`grid grid-cols-2 md:grid-cols-${gridtype ? gridtype + `md:flex-grow md:w-full` : "4"} justify-center items-center  text-md space-y-4   mx-7 md:mx-auto  `}>
          {restaurant.map((item, index) => <div key={index} className="rounded-lg shadow-sm border border-[#02060c1a] text-center mt-4 ml-3  p-2 break-words /*md:line-clamp-1*/ md:overflow-y-auto ">Best {type} in {item}</div>)}
        </div>
      </div >
    </WrapperContainer >
  )
}

export default Restaurantnear
