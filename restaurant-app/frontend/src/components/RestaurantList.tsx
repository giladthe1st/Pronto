"use client";

import React, { useState, useEffect } from 'react';
import RestaurantRow from './RestaurantRow';

// Sample restaurant data with added distance property
const restaurants = [
  {
    id: 1,
    name: "Pasta Paradise",
    deals: ["30% off on Tuesdays", "Free dessert with main course"],
    menu: "Italian cuisine, Pasta, Pizza",
    reviews: { rating: 4.5, count: 230 },
    location: "123 Main St, New York, NY",
    distance: 1.2 // miles
  },
  {
    id: 2,
    name: "Burger Bonanza",
    deals: ["Buy one get one free on Mondays", "Happy hour 5-7 PM"],
    menu: "American, Burgers, Fries",
    reviews: { rating: 4.2, count: 189 },
    location: "456 Oak Ave, Chicago, IL",
    distance: 0.8
  },
  {
    id: 3,
    name: "Sushi Station",
    deals: ["All-you-can-eat $25 on Wednesdays", "10% student discount"],
    menu: "Japanese, Sushi, Ramen",
    reviews: { rating: 4.7, count: 312 },
    location: "789 Cherry Blvd, San Francisco, CA",
    distance: 2.5
  },
  {
    id: 4,
    name: "Taco Time",
    deals: ["Taco Tuesday: $1 tacos", "$5 margaritas all day Thursday"],
    menu: "Mexican, Tacos, Burritos",
    reviews: { rating: 4.0, count: 156 },
    location: "321 Maple Rd, Austin, TX",
    distance: 3.1
  },
  {
    id: 5,
    name: "Curry House",
    deals: ["15% off for online orders", "Free naan with every curry"],
    menu: "Indian, Curry, Tandoori",
    reviews: { rating: 4.6, count: 278 },
    location: "555 Spice Lane, Seattle, WA",
    distance: 1.7
  }
];

// Calculate max values for sliders
const maxReviewCount = Math.max(...restaurants.map(r => r.reviews.count));
const maxRating = 5; // Rating is typically out of 5
const maxDistance = Math.max(...restaurants.map(r => r.distance)) + 1; // Add 1 for some buffer

const RestaurantList: React.FC = () => {
  // Filter states
  const [minRating, setMinRating] = useState<number>(0);
  const [minReviews, setMinReviews] = useState<number>(0);
  const [maxDistanceFilter, setMaxDistanceFilter] = useState<number>(maxDistance);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  // Apply filters when filter values change
  useEffect(() => {
    const filtered = restaurants.filter(restaurant => {
      const passesRatingFilter = restaurant.reviews.rating >= minRating;
      const passesReviewCountFilter = restaurant.reviews.count >= minReviews;
      const passesDistanceFilter = restaurant.distance <= maxDistanceFilter;
      
      return passesRatingFilter && passesReviewCountFilter && passesDistanceFilter;
    });
    
    setFilteredRestaurants(filtered);
  }, [minRating, minReviews, maxDistanceFilter]);

  // Filter change handlers
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(Number(e.target.value));
  };

  const handleReviewCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinReviews(Number(e.target.value));
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxDistanceFilter(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center my-8">
        🍔 Restaurant Listings
        <span className="block mt-2 text-lg font-normal">
          Discover delicious deals near you
        </span>
      </h1>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredRestaurants.length} of {restaurants.length} restaurants
      </div>

      {/* Filter controls - horizontal layout */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
        <div className="flex flex-wrap items-end gap-4">
          {/* Rating filter */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="rating-filter" className="block text-sm font-medium text-gray-700">
                Min Rating: <span className="text-blue-600">{minRating.toFixed(1)}★</span>
              </label>
            </div>
            <input
              id="rating-filter"
              type="range"
              min="0"
              max={maxRating}
              step="0.1"
              value={minRating}
              onChange={handleRatingChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Review count filter */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="review-count-filter" className="block text-sm font-medium text-gray-700">
                Min Reviews: <span className="text-blue-600">{minReviews}</span>
              </label>
            </div>
            <input
              id="review-count-filter"
              type="range"
              min="0"
              max={maxReviewCount}
              step="1"
              value={minReviews}
              onChange={handleReviewCountChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Distance filter */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="distance-filter" className="block text-sm font-medium text-gray-700">
                Max Distance: <span className="text-blue-600">{maxDistanceFilter.toFixed(1)} mi</span>
              </label>
            </div>
            <input
              id="distance-filter"
              type="range"
              min="0"
              max={maxDistance}
              step="0.1"
              value={maxDistanceFilter}
              onChange={handleDistanceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Table header */}
      <div className="hidden md:grid grid-cols-5 gap-6 p-4 border rounded mb-4 font-semibold">
        <div>Restaurant</div>
        <div>Deals</div>
        <div>Menu</div>
        <div>Reviews</div>
        <div>Location</div>
      </div>
      
      {/* Restaurant rows */}
      <div className="divide-y divide-gray-200">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <div className="py-8 text-center text-gray-500">
            No restaurants match your filters. Try adjusting your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
