<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage    from "./pages/HomePage.jsx";
import BestSeller  from "./pages/bestSeller.jsx";
import Category from "./pages/category.jsx";
import Offers      from "./pages/offers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}     />
        <Route path="/category" element={<Category />} />
        <Route path="/bestsellers" element={<BestSeller />}   />
        <Route path="/offers" element={<Offers />}       />
      </Routes>
    </BrowserRouter>
=======

import { useState } from "react";
import Home from "./pages/home.jsx";
import Category from "./pages/category.jsx";
import BestSeller from "./pages/bestSeller.jsx";
import Offers from "./pages/offers.jsx";
import {
  ACCOUNTS,
  createAccount,
  getAccountByEmail,
  getAccountById,
  updateAccountById,
} from "./data/accounts.js";

const pageMap = {
  HOME: Home,
  CATEGORY: Category,
  "BEST SELLERS": BestSeller,
  "OFFERS & UPDATES": Offers,
};

function App() {
  const [activePage, setActivePage] = useState("OFFERS & UPDATES");
  const [cartItems, setCartItems] = useState([]);
  const [accounts, setAccounts] = useState(ACCOUNTS);
  const [currentAccountId, setCurrentAccountId] = useState(null);
  const ActivePageComponent = pageMap[activePage] ?? Offers;

  const currentUser = getAccountById(accounts, currentAccountId);
  const favoriteItems = currentUser?.favorites ?? [];
  const favoriteItemKeys = favoriteItems.map((item) => item.key);

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const itemKey = product.name;
      const existingItem = previousItems.find((item) => item.key === itemKey);

      if (existingItem) {
        return previousItems.map((item) =>
          item.key === itemKey
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          key: itemKey,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateCartQuantity = (key, nextQuantity) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.key === key
            ? {
                ...item,
                quantity: nextQuantity,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (key) => {
    setCartItems((previousItems) => previousItems.filter((item) => item.key !== key));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSignUp = ({ name, email, password }) => {
    if (getAccountByEmail(accounts, email)) {
      return "An account with this email already exists.";
    }

    const newAccount = createAccount({ name, email, password });

    setAccounts((previous) => [...previous, newAccount]);

    setCurrentAccountId(newAccount.id);
    return null;
  };

  const handleLogin = ({ email, password }) => {
    const account = getAccountByEmail(accounts, email);

    if (!account || account.password !== password) {
      return "Invalid email or password.";
    }

    setCurrentAccountId(account.id);
    return null;
  };

  const handleLogout = () => {
    setCurrentAccountId(null);
  };

  const handleToggleFavorite = (product) => {
    if (!currentAccountId) {
      return false;
    }

    const itemKey = product.name;

    setAccounts((previous) => {
      const account = getAccountById(previous, currentAccountId);
      if (!account) {
        return previous;
      }

      const exists = account.favorites.some((item) => item.key === itemKey);
      const nextFavorites = exists
        ? account.favorites.filter((item) => item.key !== itemKey)
        : [
            ...account.favorites,
            {
              ...product,
              key: itemKey,
            },
          ];

      return updateAccountById(previous, currentAccountId, (current) => ({
        ...current,
        favorites: nextFavorites,
      }));
    });

    return true;
  };

  const handleRemoveFavorite = (key) => {
    if (!currentAccountId) {
      return;
    }

    setAccounts((previous) => {
      const account = getAccountById(previous, currentAccountId);
      if (!account) {
        return previous;
      }

      return updateAccountById(previous, currentAccountId, (current) => ({
        ...current,
        favorites: current.favorites.filter((item) => item.key !== key),
      }));
    });
  };

  const handleClearFavorites = () => {
    if (!currentAccountId) {
      return;
    }

    setAccounts((previous) => {
      const account = getAccountById(previous, currentAccountId);
      if (!account) {
        return previous;
      }

      return updateAccountById(previous, currentAccountId, (current) => ({
        ...current,
        favorites: [],
      }));
    });
  };

  return (
    <ActivePageComponent
      activeLink={activePage}
      onNavigate={setActivePage}
      cartItems={cartItems}
      onAddToCart={handleAddToCart}
      onUpdateCartQuantity={handleUpdateCartQuantity}
      onRemoveFromCart={handleRemoveFromCart}
      onClearCart={handleClearCart}
      currentUser={currentUser}
      onLogin={handleLogin}
      onSignUp={handleSignUp}
      onLogout={handleLogout}
      favoriteItems={favoriteItems}
      favoriteItemKeys={favoriteItemKeys}
      onToggleFavorite={handleToggleFavorite}
      onRemoveFavorite={handleRemoveFavorite}
      onClearFavorites={handleClearFavorites}
    />
>>>>>>> fcfa9f917b4e6520f78f50d785ce17217bd072cd
  );
}

export default App;