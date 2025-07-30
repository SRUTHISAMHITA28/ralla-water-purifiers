import mongoose from 'mongoose';
import Product from '../models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
  {
    name: "RWP - Basic Water Purifier",
    price: 7999,
    image: "/RWP_Basic_Water_Purifier.png",
    features: [
      "7-stage filtration",
      "UV protection",
      "Smart water saving",
      "DIY maintenance"
    ],
    description: "Our most affordable option with essential features for clean water.",
    category: "basic",
    stock: 50
  },
  {
    name: "RWP - Pro Water Purifier",
    price: 11999,
    image: "/RWP_Pro_Plus_Premium_Water_Purifier.jpg",
    features: [
      "5-stage filtration",
      "UV protection",
      "Compact design",
      "No electricity needed"
    ],
    description: "Compact and efficient purifier for smaller spaces.",
    category: "pro",
    stock: 30
  },
  {
    name: "RWP - Pro Plus: Premium Water Purifier",
    price: 12999,
    image: "/RWP_Pro_Plus_Premium_Water_Purifier.jpg",
    features: [
      "6-stage filtration",
      "RO+UV dual protection",
      "TDS controller",
      "Low maintenance"
    ],
    description: "Premium purifier with advanced filtration technology.",
    category: "premium",
    stock: 25
  },
  {
    name: "RWP - Ultra: Premium Water Purifier",
    price: 14499,
    image: "/RWP_Ultra_Premium_Water_Purifier.jpg",
    features: [
      "App connectivity",
      "Water quality alerts",
      "Filter replacement reminders",
      "Energy-efficient"
    ],
    description: "Our most advanced purifier with smart features.",
    category: "premium",
    stock: 20
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
