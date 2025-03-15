const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS for Next.js dev server (port 3000)
app.use(cors({ origin: 'http://localhost:3000' }));

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

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});


// Start server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});