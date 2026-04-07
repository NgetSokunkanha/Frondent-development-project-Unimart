
export const newProducts = [
  { name: "Cheetos Large Global Brand",        brand: "Cheetos",    price: 9.00,                rating: 4.5, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Gardenia Malaysia White Bread",     brand: "Gardenia",   price: 2.50, oldPrice: 3.20, rating: 4.2, badge: "New",  inStock: true,  category: "Fresh Produce" },
  { name: "Maggi Switzerland Instant Noodles", brand: "Maggi",      price: 0.47, oldPrice: 0.75, rating: 4.0, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Organic Almond Butter",             brand: "NutriBlend", price: 7.99, oldPrice: 9.50, rating: 4.7, badge: "New",  inStock: true,  category: "Health Store"  },
  { name: "Green Tea Matcha Latte",            brand: "Ippodo",     price: 4.25,                rating: 4.3, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Himalayan Pink Salt",               brand: "SaltCo",     price: 1.99,                rating: 4.1, badge: "New",  inStock: true,  category: "Fresh Produce" },
];

export const bestSellers = [
  { name: "Eggland's Best USA Eggs (12pk)", brand: "Eggland's", price: 5.12,                rating: 4.8, badge: "Best", inStock: true,  category: "Fresh Produce" },
  { name: "Pepsi Refreshing USA Soda",      brand: "Pepsi",     price: 1.00, oldPrice: 1.50, rating: 4.6, badge: "Best", inStock: true,  category: "Beverages"     },
  { name: "Dove USA Moisturizing Soap",     brand: "Dove",      price: 4.50,                rating: 4.7, badge: "Best", inStock: true,  category: "Personal Care" },
  { name: "Lay's Classic Potato Chips",     brand: "Lay's",     price: 2.75, oldPrice: 3.50, rating: 4.5, badge: "Best", inStock: true,  category: "Snacks"        },
  { name: "Tropicana Orange Juice 1L",      brand: "Tropicana", price: 3.99,                rating: 4.4, badge: "Best", inStock: true,  category: "Beverages"     },
  { name: "Quaker Oats 500g",               brand: "Quaker",    price: 2.49,                rating: 4.6, badge: "Best", inStock: false, category: "Breakfast"     },
];

export const allProducts = [
  ...newProducts,
  ...bestSellers,
  { name: "Japan Pocari Sweat Hydration",   brand: "Pocari",     price: 1.50,                rating: 4.3, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Japan Meiji Fresh Milk Braw",    brand: "Meiji",      price: 2.80,                rating: 4.1, badge: "New",  inStock: true,  category: "Fresh Produce" },
  { name: "USA Tyson Frozen Chicken Brand", brand: "Tyson",      price: 5.20,                rating: 4.4, badge: "New",  inStock: true,  category: "Frozen Food"   },
  { name: "Head & Shoulders Shampoo",       brand: "H&S",        price: 3.00,                rating: 4.5, badge: "New",  inStock: true,  category: "Personal Care" },
  { name: "Innisfree Green Hydrating Cream",brand: "Innisfree",  price: 6.00,                rating: 4.6, badge: "New",  inStock: true,  category: "Beauty"        },
  { name: "Maybelline Fit Me Foundation",   brand: "Maybelline", price: 11.00,               rating: 4.2, badge: "New",  inStock: true,  category: "Beauty"        },
  { name: "USA Pringles Sour Cream Onion",  brand: "Pringles",   price: 2.20,                rating: 4.5, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Austria Red Bull Energy Drink",  brand: "Red Bull",   price: 2.50,                rating: 4.7, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Korea Spicy Chicken Ramen",      brand: "Samyang",    price: 1.50,                rating: 4.8, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Korea Bibigo Steamed Dumplings", brand: "Bibigo",     price: 3.00,                rating: 4.4, badge: "New",  inStock: true,  category: "Frozen Food"   },
  { name: "Vitamin C Supplements 500mg",    brand: "Centrum",    price: 8.50,                rating: 4.6, badge: "Sale", inStock: true,  category: "Health Store"  },
  { name: "Quaker Instant Oatmeal Sachet",  brand: "Quaker",     price: 0.99,                rating: 4.2, badge: "New",  inStock: true,  category: "Breakfast"     },
];         