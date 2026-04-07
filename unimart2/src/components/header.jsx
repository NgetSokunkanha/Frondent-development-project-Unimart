import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiLogOut } from "react-icons/fi";
import logo from "../assets/UnimartLogo.png";
import LoginModal    from "./loginModal.jsx";
import SignUpModal   from "./signUpModal.jsx";
import CartModal     from "./cartModal.jsx";
import FavouriteModal from "./favouriteModal.jsx";
import "../styles/Header.css";

const navLinks = [
  { label: "HOME",             path: "/"            },
  { label: "CATEGORY",         path: "/category"    },
  { label: "BEST SELLERS",     path: "/bestsellers" },
  { label: "OFFERS & UPDATES", path: "/offers"      },
];

export default function Header({
  cartItems          = [],
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onClearCart,
  favoriteItems      = [],
  onRemoveFavorite,
  onClearFavorites,
  currentUser        = null,
  onLogin,
  onSignUp,
  onLogout,
}) {
  const location = useLocation();

  const [cartOpen,      setCartOpen]      = useState(false);
  const [favOpen,       setFavOpen]       = useState(false);
  const [loginOpen,     setLoginOpen]     = useState(false);
  const [signUpOpen,    setSignUpOpen]    = useState(false);

  const totalItems = cartItems.reduce((sum, i) => sum + (i.quantity ?? 1), 0);

  const handleLoginSubmit = (credentials) => {
    const err = onLogin?.(credentials);
    if (!err) setLoginOpen(false);
    return err ?? null;
  };

  const handleSignUpSubmit = (data) => {
    const err = onSignUp?.(data);
    if (!err) setSignUpOpen(false);
    return err ?? null;
  };

  const initials = currentUser
    ? currentUser.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : null;

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Unimart Logo" className="logoImg" />
          </Link>
        </div>

        <ul className="links">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`link ${location.pathname === path ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="actions">
          {/* Cart */}
          <button
            className="iconBtn"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <FiShoppingCart size={20} />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </button>

          {/* Favourites */}
          <button
            className="iconBtn"
            onClick={() => setFavOpen(true)}
            aria-label="Open favourites"
          >
            <FiHeart size={20} />
            {favoriteItems.length > 0 && (
              <span className="badge">{favoriteItems.length}</span>
            )}
          </button>

          {/* User / Auth */}
          {currentUser ? (
            <button
              className="iconBtn"
              onClick={onLogout}
              title={`Logout (${currentUser.name})`}
              aria-label="Logout"
            >
              {initials ? (
                <span className="userInitials">{initials}</span>
              ) : (
                <FiLogOut size={20} />
              )}
            </button>
          ) : (
            <button
              className="iconBtn"
              onClick={() => setLoginOpen(true)}
              aria-label="Login"
            >
              <FiUser size={20} />
            </button>
          )}
        </div>
      </nav>

      {/* Modals */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={onUpdateCartQuantity}
        onRemoveItem={onRemoveFromCart}
        onClearCart={onClearCart}
      />

      <FavouriteModal
        isOpen={favOpen}
        onClose={() => setFavOpen(false)}
        items={favoriteItems}
        onRemoveItem={onRemoveFavorite}
        onClearFavorites={onClearFavorites}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToSignUp={() => { setLoginOpen(false); setSignUpOpen(true); }}
        onSubmitLogin={handleLoginSubmit}
      />

      <SignUpModal
        isOpen={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToLogin={() => { setSignUpOpen(false); setLoginOpen(true); }}
        onSubmitSignUp={handleSignUpSubmit}
      />
    </>
  );
}