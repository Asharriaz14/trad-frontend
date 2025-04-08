export default function ResponsiveLayout() {
  const paragraphText = (
    <>
      Number One Broker
      <br /> Trade Like A Pro!
    </>
  );

  const mobText = "Number One Broker Trade Like A Pro!";
  const headingText = (
    <>
      Boost Your Trade upto a <br />
      <span className="text-4xl">10% Equity Reward!;</span>
    </>
  );
  return (
    <div className="pt-40 relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="public/Aonetrade.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Div - 65% */}
          <div className="lg:w-[65%] w-full flex flex-col items-left mb-8 lg:mb-0 text-white">
            <img
              src="public/A-One - Logo-02.svg"
              alt="Left"
              className="w-60 h-60 object-cover mb-4"
            />

            {/* Paragraph for large screens */}
            <p className="hidden lg:block mb-2 w-full text-right">
              {paragraphText}
            </p>

            {/* Paragraph for mobile/tablet screens */}
            <p className="block lg:hidden mb-2 w-full text-right">{mobText}</p>

            <h2 className="text-2xl font-bold w-full text-left">
              {headingText}
            </h2>
          </div>

          {/* Right Div - 35% */}
          <div className="lg:w-[35%] w-full flex flex-col items-center justify-center text-white">
            <img
              src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/5-stars-banner-logos-inverted.svg"
              alt="Right"
              className="w-60 h-60 object-cover mb-4"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
