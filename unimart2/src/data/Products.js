
const productImage = (fileName) =>
  new URL(`../assets/store items/${fileName}`, import.meta.url).href;

const newProducts = [
  { name: "Cheetos Large Global Brand",        image: productImage("Cheetos Large Global Brand.png"),        brand: "Cheetos",    price: 9.00,                rating: 4.5, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Gardenia Malaysia White Bread",     image: productImage("Gardenia Malaysia White Bread.png"),     brand: "Gardenia",   price: 2.50, oldPrice: 3.20, rating: 4.2, badge: "New",  inStock: true,  category: "Fresh Produce" },
  { name: "Maggi Switzerland Instant Noodles", image: productImage("Maggi Switzerland Instant Noodles.png"), brand: "Maggi",      price: 0.47, oldPrice: 0.75, rating: 4.0, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Organic Almond Butter",             image: productImage("Health Care.png"),                        brand: "NutriBlend", price: 7.99, oldPrice: 9.50, rating: 4.7, badge: "New",  inStock: true,  category: "Health Store"  },
  { name: "Green Tea Matcha Latte",            image: productImage("Beverages.png"),                          brand: "Ippodo",     price: 4.25,                rating: 4.3, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Himalayan Pink Salt",               image: productImage("Fresh Products.png"),                     brand: "SaltCo",     price: 1.99,                rating: 4.1, badge: "New",  inStock: true,  category: "Fresh Produce" },
];

const bestSellers = [
  { name: "Eggland's Best USA Eggs (12pk)", image: productImage("Eggland\u2019s best USA eggs.png"), brand: "Eggland's", price: 5.12,                rating: 4.8, badge: "Best", inStock: true,  category: "Fresh Produce" },
  { name: "Pepsi Refreshing USA Soda",      image: productImage("Pepsi refreshing USA soda.png"),   brand: "Pepsi",     price: 1.00, oldPrice: 1.50, rating: 4.6, badge: "Best", inStock: true,  category: "Beverages"     },
  { name: "Dove USA Moisturizing Soap",     image: productImage("Dove USA moisturizing soap.png"),  brand: "Dove",      price: 4.50,                rating: 4.7, badge: "Best", inStock: true,  category: "Personal Care" },
  { name: "Lay's Classic Potato Chips",     image: productImage("Snacks.png"),                      brand: "Lay's",     price: 2.75, oldPrice: 3.50, rating: 4.5, badge: "Best", inStock: true,  category: "Snacks"        },
  { name: "Tropicana Orange Juice 1L",      image: productImage("Beverages.png"),                   brand: "Tropicana", price: 3.99,                rating: 4.4, badge: "Best", inStock: true,  category: "Beverages"     },
  { name: "Quaker Oats 500g",               image: productImage("Fresh Products.png"),              brand: "Quaker",    price: 2.49,                rating: 4.6, badge: "Best", inStock: false, category: "Breakfast"     },
];

const extraProducts = [
  { name: "Japan Pocari Sweat Hydration",   image: productImage("Japan Pocari Sweat hydration drink.png"),   brand: "Pocari",     price: 1.50,                rating: 4.3, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Japan Meiji Fresh Milk Braw",    image: productImage("Japan Meiji fresh milk brand.png"),         brand: "Meiji",      price: 2.80,                rating: 4.1, badge: "New",  inStock: true,  category: "Fresh Produce" },
  { name: "USA Tyson Frozen Chicken Brand", image: productImage("USA Tyson frozen chicken brand.png"),       brand: "Tyson",      price: 5.20,                rating: 4.4, badge: "New",  inStock: true,  category: "Frozen Food"   },
  { name: "Head & Shoulders Shampoo",       image: productImage("USA Head Shoulders shampoo.png"),           brand: "H&S",        price: 3.00,                rating: 4.5, badge: "New",  inStock: true,  category: "Personal Care" },
  { name: "Innisfree Green Hydrating Cream",image: productImage("Korea Innisfree green hydrating cream.png"),brand: "Innisfree",  price: 6.00,                rating: 4.6, badge: "New",  inStock: true,  category: "Beauty"        },
  { name: "Maybelline Fit Me Foundation",   image: productImage("USA Maybelline fit me foundation.png"),     brand: "Maybelline", price: 11.00,               rating: 4.2, badge: "New",  inStock: true,  category: "Beauty"        },
  { name: "USA Pringles Sour Cream Onion",  image: productImage("USA Pringles sour cream onion chips.png"),  brand: "Pringles",   price: 2.20,                rating: 4.5, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Austria Red Bull Energy Drink",  image: productImage("Austria Red Bull energy boost drink.png"),  brand: "Red Bull",   price: 2.50,                rating: 4.7, badge: "New",  inStock: true,  category: "Beverages"     },
  { name: "Korea Spicy Chicken Ramen",      image: productImage("Korea spicy chicken ramen noodles.png"),     brand: "Samyang",    price: 1.50,                rating: 4.8, badge: "New",  inStock: true,  category: "Snacks"        },
  { name: "Korea Bibigo Steamed Dumplings", image: productImage("Korea Bibigo steamed pork dumplings.png"),   brand: "Bibigo",     price: 3.00,                rating: 4.4, badge: "New",  inStock: true,  category: "Frozen Food"   },
  { name: "Vitamin C Supplements 500mg",    image: productImage("Health Care.png"),                           brand: "Centrum",    price: 8.50,                rating: 4.6, badge: "Sale", inStock: true,  category: "Health Store"  },
  { name: "Quaker Instant Oatmeal Sachet",  image: productImage("Fresh Products.png"),                        brand: "Quaker",     price: 0.99,                rating: 4.2, badge: "New",  inStock: true,  category: "Breakfast"     },
];

export { newProducts, bestSellers };
export const allProducts = [...newProducts, ...bestSellers, ...extraProducts];