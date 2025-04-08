
const TradingPlatforms = () => {
  return (
    <div>
      <div className='container mx-auto my-14 max-w-7xl relative'>
        {/* Header Section */}
        <div className='text-center mb-10 px-4'>
          <h1 className='text-4xl md:text-5xl font-medium mb-4'>
            Browse the full range of platforms
            <span className='bg-red-500 w-10 h-6 inline-block ml-2'></span>
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We understand that different clients have different needs. 
            Therefore, we offer a wide selection of trusted, award-winning platforms and account types to choose from
          </p>
        </div>

        {/* Central Image with Overlapping Boxes */}
        <div className='relative flex justify-center items-center'>
          {/* Central Image */}
          <img 
             src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/new/platforms.webp" 
             
            alt="Trading Platforms" 
            className="w-full max-w-[750px] h-auto object-contain z-10 relative"
          />

          {/* Boxes Overlay */}
          <div className='absolute inset-0 z-20 pointer-events-none'>
          

          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingPlatforms




