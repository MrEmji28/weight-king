import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Dumbell from "../assets/images/product-img/freewieghts-dumbell.jpeg";
import Barbell from "../assets/images/product-img/freeweights-barbell.jpeg";
import Plates from "../assets/images/product-img/freeweights-plates.jpeg";
import Bar from "../assets/images/product-img/freeweights-bar.jpeg";
import Band from "../assets/images/product-img/freeweights-band.jpeg";
import Kettlebell from "../assets/images/product-img/freeweights-Kettlebell.jpeg";
import Balls from "../assets/images/product-img/freeweights-balls.jpeg";
import Rack from "../assets/images/product-img/freeweights-benchrack.jpeg";
import Lalagyan from "../assets/images/product-img/freeweights-lalagyan.jpeg";
import Threadmill from "../assets/images/product-img/machines-tredmill.jpeg";
import ChestPressMachine from "../assets/images/product-img/machines-chest-press-machine.jpeg";
import SeatedDipMachine from "../assets/images/product-img/machines-seated-dip-machine.jpeg";
import LegPressMachine from "../assets/images/product-img/machines-leg-press-machine.jpeg";
import BenchPress from "../assets/images/product-img/machines-bench-press.jpeg";
import StationaryBicycle from "../assets/images/product-img/machines-stationary-bicycle.jpeg";
import PushUpBar from "../assets/images/product-img/calisthenics-push-up-bar.jpeg";
import PullUpBar from "../assets/images/product-img/calisthenics-pull-up-bar.jpeg";
import GymnasticRings from "../assets/images/product-img/calisthenics-gymnastic-rings.jpeg";
import Parallettes from "../assets/images/product-img/calisthenics-parallettes.jpeg";
import AbRoller from "../assets/images/product-img/calisthenics-ab roller.jpeg";
import KettleBell from "../assets/images/product-img/calisthenics-kettlebell.jpeg";
import IndoorRower from "../assets/images/product-img/cardio-indoor-rower.jpeg";
import StairClimber from "../assets/images/product-img/cardio-stair-climber.jpeg";
import AirBike from "../assets/images/product-img/cardio-air-bike.jpeg";
import WeightTrainingGloves from "../assets/images/product-img/gears-weight-training-gloves.jpeg";
import WeightLiftingBelt from "../assets/images/product-img/gears-weight-lifting-belt.jpeg";
import WristStraps from "../assets/images/product-img/gears-wrist-straps.jpeg";

function ShopNow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        {/* Title and Search bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Shop Now!</h1>
          <div className="relative w-full max-w-md ml-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {/* Categories sidebar */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mt-4 md:mt-20">
            <h2 className="text-3xl font-bold mb-2">Categories</h2>
            <ul className="space-y-2 text-2xl">
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Free Weights" ? "font-semibold" : ""
                }`}
                onClick={() => handleCategorySelect("Free Weights")}
              >
                Free Weights
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Machines" ? "font-semibold" : ""
                }`}
                onClick={() => handleCategorySelect("Machines")}
              >
                Machines
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Calisthenics" ? "font-semibold" : ""
                }`}
                onClick={() => handleCategorySelect("Calisthenics")}
              >
                Calisthenics
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Cardio" ? "font-semibold" : ""
                }`}
                onClick={() => handleCategorySelect("Cardio")}
              >
                Cardio
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Gears" ? "font-semibold" : ""
                }`}
                onClick={() => handleCategorySelect("Gears")}
              >
                Gears
              </li>
            </ul>
          </div>
          {/* Main content */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Product cards */}
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Dumbell} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dumbell</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Barbell} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Barbell</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Plates} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Plates</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Bar} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bar</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Band} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Band</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Kettlebell} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kettlebell</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Balls} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Balls</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Rack} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weight Bench</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Lalagyan} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Equipment Holder</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Threadmill} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Treadmill</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={ChestPressMachine} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Chest Press Machine</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={SeatedDipMachine} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Seated Dip Machine</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={LegPressMachine} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Leg Press Machine</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={BenchPress} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bench Rack</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={StationaryBicycle} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Stationary Bicycle</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={PushUpBar} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Push Up Bar</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={PullUpBar} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Pull Up Bar</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={GymnasticRings} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Gymnastic Rings</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Parallettes} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Parallettes</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={AbRoller} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Ab Roller</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={KettleBell} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kettlebell</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={Threadmill} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Treadmill</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={StationaryBicycle} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Stationary Bicycle</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={IndoorRower} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Indoor Rower</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={StairClimber} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Stair Climber</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={AirBike} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Air Bike</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={WeightTrainingGloves} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weight Training Gloves</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={WeightLiftingBelt} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weight Lifting Belt</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={WristStraps} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Wrist Straps</h2>
                <p>Indicate Product Short Description</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShopNow;
