import React from "react";

function ProductCard() {
  return (
    <div className="mt-8 px-4 md:px-0 flex flex-col items-center">
     <h1 className="text-4xl font-bold mb-4">Our Products</h1>
     <div className="h-5"></div>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-4">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-neutral mt-4">More Products</button>
      <div className="h-16"></div> {/* Adds additional space at the bottom */}
    </div>
  );
}

export default ProductCard;
