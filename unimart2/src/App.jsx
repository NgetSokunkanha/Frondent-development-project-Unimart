import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage   from "./pages/HomePage.jsx";
import BestSeller from "./pages/bestSeller.jsx";
import Category   from "./pages/category.jsx";
import Offers     from "./pages/offers.jsx";
import "./styles/global.css";

// ── helpers ──────────────────────────────────────────────────────────────────
function makeKey(item) {
  return item.name;
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  // Cart
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const key = makeKey(product);
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, key, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (key, qty) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.key !== key));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.key === key ? { ...i, quantity: qty } : i))
      );
    }
  };

  const handleRemoveFromCart = (key) => {
    setCartItems((prev) => prev.filter((i) => i.key !== key));
  };

  const handleClearCart = () => setCartItems([]);

  // Favourites
  const [favoriteItems, setFavoriteItems] = useState([]);

  const handleToggleFavorite = (product) => {
    const key = makeKey(product);
    setFavoriteItems((prev) => {
      const exists = prev.find((i) => i.key === key);
      if (exists) return prev.filter((i) => i.key !== key);
      return [...prev, { ...product, key }];
    });
  };

  const handleRemoveFavorite = (key) => {
    setFavoriteItems((prev) => prev.filter((i) => i.key !== key));
  };

  const handleClearFavorites = () => setFavoriteItems([]);

  const favoriteItemKeys = favoriteItems.map((i) => i.key);

  // Auth
  const [currentUser, setCurrentUser] = useState(null);

  // Fake users store (replace with real API)
  const [users, setUsers] = useState([]);

  const handleLogin = ({ email, password }) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return "Invalid email or password.";
    setCurrentUser(found);
    return null;
  };

  const handleSignUp = ({ name, email, password }) => {
    if (users.find((u) => u.email === email)) return "Email already registered.";
    const newUser = { name, email, password };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return null;
  };

  const handleLogout = () => setCurrentUser(null);

  // Shared props
  const sharedProps = {
    cartItems,
    onAddToCart:          handleAddToCart,
    onUpdateCartQuantity: handleUpdateCartQuantity,
    onRemoveFromCart:     handleRemoveFromCart,
    onClearCart:          handleClearCart,
    favoriteItems,
    favoriteItemKeys,
    onToggleFavorite:     handleToggleFavorite,
    onRemoveFavorite:     handleRemoveFavorite,
    onClearFavorites:     handleClearFavorites,
    currentUser,
    onLogin:              handleLogin,
    onSignUp:             handleSignUp,
    onLogout:             handleLogout,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<HomePage   {...sharedProps} />} />
        <Route path="/category"   element={<Category   {...sharedProps} />} />
        <Route path="/bestsellers" element={<BestSeller {...sharedProps} />} />
        <Route path="/offers"     element={<Offers     {...sharedProps} />} />
      </Routes>
    </BrowserRouter>
  );
}