import { useState } from "react";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../assets/UnimartLogo.png";
import LoginModal from "./loginModal.jsx";
import SignUpModal from "./signUpModal.jsx";
import CartModal from "./cartModal.jsx";
import FavouriteModal from "./favouriteModal.jsx";
import "../styles/Header.css";

const navLinks = ["HOME", "CATEGORY", "BEST SELLERS", "OFFERS & UPDATES"];

export default function Header({
  initialActive = "HOME",
  activeLink,
  onNavigate,
  cartItems = [],
  onUpdateCartQuantity,
  onRemoveFromCart,
  onClearCart,
  currentUser,
  onLogin,
  onSignUp,
  onLogout,
  favoriteItems = [],
  onRemoveFavorite,
  onClearFavorites,
}) {
  const [internalActive, setInternalActive] = useState(initialActive);
  const [activeAuthModal, setActiveAuthModal] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouriteOpen, setIsFavouriteOpen] = useState(false);
  const active = activeLink ?? internalActive;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const favoriteCount = favoriteItems.length;

  const handleLoginSubmit = (credentials) => {
    const maybeError = onLogin?.(credentials) ?? null;

    if (!maybeError) {
      setActiveAuthModal(null);
    }

    return maybeError;
  };

  const handleSignUpSubmit = (accountData) => {
    const maybeError = onSignUp?.(accountData) ?? null;

    if (!maybeError) {
      setActiveAuthModal(null);
    }

    return maybeError;
  };

  const handleFavoriteIconClick = () => {
    if (!currentUser) {
      setActiveAuthModal("login");
      return;
    }

    setIsFavouriteOpen(true);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Unimart Logo" className="logoImg" />
        </div>

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`link ${active === link ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate(link);
                    return;
                  }

                  setInternalActive(link);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="actions">
          <button
            className="iconBtn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart modal"
          >
            <FiShoppingCart size={20} />
            <span className="cart-badge">{cartCount}</span>
          </button>

          <button className="iconBtn" onClick={handleFavoriteIconClick} aria-label="Open favorites modal">
            <FiHeart size={20} />
            <span className="heart-badge">{favoriteCount}</span>
          </button>

          <button
            className="iconBtn"
            onClick={() => {
              if (currentUser) {
                onLogout?.();
                return;
              }

              setActiveAuthModal("login");
            }}
            aria-label={currentUser ? "Logout" : "Open login modal"}
            title={currentUser ? `Logout (${currentUser.name})` : "Login"}
          >
            <FiUser size={20} />
          </button>
        </div>
      </nav>

      <LoginModal
        isOpen={activeAuthModal === "login"}
        onClose={() => setActiveAuthModal(null)}
        onSwitchToSignUp={() => setActiveAuthModal("signup")}
        onSubmitLogin={handleLoginSubmit}
      />

      <SignUpModal
        isOpen={activeAuthModal === "signup"}
        onClose={() => setActiveAuthModal(null)}
        onSwitchToLogin={() => setActiveAuthModal("login")}
        onSubmitSignUp={handleSignUpSubmit}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={onUpdateCartQuantity}
        onRemoveItem={onRemoveFromCart}
        onClearCart={onClearCart}
      />

      <FavouriteModal
        isOpen={isFavouriteOpen}
        onClose={() => setIsFavouriteOpen(false)}
        items={favoriteItems}
        onRemoveItem={onRemoveFavorite}
        onClearFavorites={onClearFavorites}
      />
    </>
  );
}