

const ButtonEl = ({ btntitle, btntype, btnimg }) => {
  return (
    <div className='bg-slate-950  w-[190px] flex rounded-lg p-2 shadow-lg'>
      <div className='rounded-lg w-[50px] p-2'><img src={`/images/${btnimg}`} className='w-full rounded-lg' /></div>
      <div className='flex flex-col text-amber-50 justify-center '><h5 className='text-xs font-[450]'>{btntitle}</h5><h1 className='text-xl font-semibold mt-0'>{btntype}</h1></div>
    </div>
  )
}

export default ButtonEl
