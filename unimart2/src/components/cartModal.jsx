import { useEffect } from "react";
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2, FiX } from "react-icons/fi";
import "../styles/cartModal.css";

export default function CartModal({
	isOpen,
	onClose,
	items = [],
	onUpdateQuantity,
	onRemoveItem,
	onClearCart,
}) {
	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handleEscKey = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleEscKey);
		return () => window.removeEventListener("keydown", handleEscKey);
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<div className="cart-modal-overlay" onClick={onClose}>
			<div
				className="cart-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="cart-modal-title"
				onClick={(event) => event.stopPropagation()}
			>
				<button className="cart-modal-close" onClick={onClose} aria-label="Close cart modal">
					<FiX size={20} />
				</button>

				<div className="cart-modal-header">
					<h2 id="cart-modal-title">Your Cart</h2>
					<span className="cart-count-pill">
						<FiShoppingBag size={14} />
						{totalItems} item{totalItems === 1 ? "" : "s"}
					</span>
				</div>

				{items.length === 0 ? (
					<p className="cart-empty-copy">Your cart is empty. Add products with Buy Now.</p>
				) : (
					<>
						<div className="cart-items-list">
							{items.map((item) => (
								<article key={item.key} className="cart-item-row">
							<div className="cart-item-image" />

									<div className="cart-item-main">
										<p className="cart-item-name">{item.name}</p>
										<p className="cart-item-brand">{item.brand}</p>
										<p className="cart-item-price">${item.price.toFixed(2)}</p>

										<div className="cart-qty-controls">
											<button
												type="button"
												onClick={() => onUpdateQuantity(item.key, item.quantity - 1)}
												aria-label={`Decrease quantity of ${item.name}`}
											>
												<FiMinus size={14} />
											</button>
											<span>{item.quantity}</span>
											<button
												type="button"
												onClick={() => onUpdateQuantity(item.key, item.quantity + 1)}
												aria-label={`Increase quantity of ${item.name}`}
											>
												<FiPlus size={14} />
											</button>
										</div>
									</div>

									<button
										type="button"
										className="cart-remove-btn"
										onClick={() => onRemoveItem(item.key)}
										aria-label={`Remove ${item.name} from cart`}
									>
										<FiTrash2 size={16} />
									</button>
								</article>
							))}
						</div>

						<div className="cart-summary">
							<p>
								Subtotal <strong>${subtotal.toFixed(2)}</strong>
							</p>
							<div className="cart-summary-actions">
								<button type="button" className="cart-clear-btn" onClick={onClearCart}>
									Clear Cart
								</button>
								<button type="button" className="cart-checkout-btn">
									Checkout
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
