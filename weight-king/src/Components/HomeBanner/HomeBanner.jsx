import React from "react";

function HomeBanner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://wallpaperaccess.com/full/1535383.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Rule Your</h1>
          <h1 className="mb-5 text-7xl font-bold">Fitness Goal</h1>
          <p className="mb-5">
          Your Ultimate Destination for Top-Quality Fitness Equipment. With a commitment to superior products and unwavering support,
           we're here to fuel your journey to peak performance. 
          </p>
          <button class="btn">Learn More</button>
        </div>
      </div>
    </div>

      
    
  );
}
export default HomeBanner;
