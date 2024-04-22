import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


function FreeWeights() {
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
                        <h2 className="text-4xl font-bold mb-2">Categories</h2>
                        <ul className="space-y-2 text-4xl">
                            <li
                                className={`cursor-pointer ${selectedCategory === "Free Weights" ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleCategorySelect("Free Weights")}
                            >
                                Free Weights
                            </li>
                            <li
                                className={`cursor-pointer ${selectedCategory === "Machines" ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleCategorySelect("Machines")}
                            >
                                Machines
                            </li>
                            <li
                                className={`cursor-pointer ${selectedCategory === "Calisthenics" ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleCategorySelect("Calisthenics")}
                            >
                                Calisthenics
                            </li>
                            <li
                                className={`cursor-pointer ${selectedCategory === "Cardio" ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleCategorySelect("Cardio")}
                            >
                                Cardio
                            </li>
                            <li
                                className={`cursor-pointer ${selectedCategory === "Gears" ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleCategorySelect("Gears")}
                            >
                                Gears
                            </li>
                        </ul>
                    </div>
                    {/* Main content */}
                    <div className="w-full md:w-3/4 px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Product cards */}
                            {Array.from({ length: 15 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="card card-compact bg-base-100 shadow-xl"
                                >
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default FreeWeights;























































































































































































































