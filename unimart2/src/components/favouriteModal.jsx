import { useEffect } from "react";
import { FiHeart, FiTrash2, FiX } from "react-icons/fi";
import "../styles/favouriteModal.css";

export default function FavouriteModal({
	isOpen,
	onClose,
	items = [],
	onRemoveItem,
	onClearFavorites,
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

	return (
		<div className="favourite-modal-overlay" onClick={onClose}>
			<div
				className="favourite-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="favourite-modal-title"
				onClick={(event) => event.stopPropagation()}
			>
				<button className="favourite-modal-close" onClick={onClose} aria-label="Close favorites modal">
					<FiX size={20} />
				</button>

				<div className="favourite-modal-header">
					<h2 id="favourite-modal-title">Your Favorites</h2>
					<span className="favourite-count-pill">
						<FiHeart size={14} />
						{items.length} item{items.length === 1 ? "" : "s"}
					</span>
				</div>

				{items.length === 0 ? (
					<p className="favourite-empty-copy">No favorites yet. Tap the star icon on product cards.</p>
				) : (
					<>
						<div className="favourite-items-list">
							{items.map((item) => (
								<article key={item.key} className="favourite-item-row">
									<img src={item.image} alt={item.name} className="favourite-item-image" />

									<div className="favourite-item-main">
										<p className="favourite-item-name">{item.name}</p>
										<p className="favourite-item-brand">{item.brand}</p>
										<p className="favourite-item-price">${item.price.toFixed(2)}</p>
									</div>

									<button
										type="button"
										className="favourite-remove-btn"
										onClick={() => onRemoveItem(item.key)}
										aria-label={`Remove ${item.name} from favorites`}
									>
										<FiTrash2 size={16} />
									</button>
								</article>
							))}
						</div>

						<div className="favourite-summary-actions">
							<button type="button" className="favourite-clear-btn" onClick={onClearFavorites}>
								Clear Favorites
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
