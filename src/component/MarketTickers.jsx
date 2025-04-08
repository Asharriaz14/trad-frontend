import Slider from "./Slider"

const MarketTickers = () => {


  return (
    <div className="bottom-0 left-0 w-full bg-black items-center px-4 py-2 z-10  ">
      {/* Navigation Buttons */}
      <div className='flex justify-center h-16 '>

      
      <div className="flex justify-center space-x-1 text-white text-sm ">
        <button className="border-1 hover:bg-blue-600 border-blue-500  rounded-xl w-20 h-8 mx-2 m-5">Popular</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Forex</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-24 h-8 rounded-xl mx-2 m-5">Crypto CFDs</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Metals</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Futures</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Energy</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Shares</button>
        <button className= "hover:bg-blue-600 hover:border-1 hover:border-blue-700 w-16 h-8 rounded-xl mx-2 m-5">Energy</button>
        <button className= "text-green-500 hover:bg-blue-600 hover:text-white hover:border-1 hover:border-blue-700 w-16 mx-2 h-8 rounded-xl m-5">ETFs</button>
        {/* <button className="hover:text-blue-500 text-green-500">ETFs</button> */}
      </div>


    </div>
<Slider/>
    </div>
  )
}

export default MarketTickers