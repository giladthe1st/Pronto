import React from 'react';
import RestaurantRow from './RestaurantRow';

// Sample restaurant data
const restaurants = [
  {
    id: 1,
    name: "Pasta Paradise",
    deals: ["30% off on Tuesdays", "Free dessert with main course"],
    menu: "Italian cuisine, Pasta, Pizza",
    reviews: { rating: 4.5, count: 230 },
    location: "123 Main St, New York, NY"
  },
  {
    id: 2,
    name: "Burger Bonanza",
    deals: ["Buy one get one free on Mondays", "Happy hour 5-7 PM"],
    menu: "American, Burgers, Fries",
    reviews: { rating: 4.2, count: 189 },
    location: "456 Oak Ave, Chicago, IL"
  },
  {
    id: 3,
    name: "Sushi Station",
    deals: ["All-you-can-eat $25 on Wednesdays", "10% student discount"],
    menu: "Japanese, Sushi, Ramen",
    reviews: { rating: 4.7, count: 312 },
    location: "789 Cherry Blvd, San Francisco, CA"
  },
  {
    id: 4,
    name: "Taco Time",
    deals: ["Taco Tuesday: $1 tacos", "$5 margaritas all day Thursday"],
    menu: "Mexican, Tacos, Burritos",
    reviews: { rating: 4.0, count: 156 },
    location: "321 Maple Rd, Austin, TX"
  },
  {
    id: 5,
    name: "Curry House",
    deals: ["15% off for online orders", "Free naan with every curry"],
    menu: "Indian, Curry, Tandoori",
    reviews: { rating: 4.6, count: 278 },
    location: "555 Spice Lane, Seattle, WA"
  }
];

const RestaurantList: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center my-8">
        🍔 Restaurant Listings
        <span className="block mt-2 text-lg font-normal">
          Discover delicious deals near you
        </span>
      </h1>

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
        {restaurants.map(restaurant => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
