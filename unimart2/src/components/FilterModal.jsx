import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/FilterModal.css";

const CATEGORY_OPTIONS = [
	"Personal care",
	"Health Care",
	"Fresh Products",
	"Snacks",
	"Beverages",
	"Beauty Care",
	"Frozen Foods",
];

const PRICE_OPTIONS = ["< $5", "$5 - $10", "$11 - $20", "$30 >", "$21 - $30"];

const OFFER_OPTIONS = ["New Arrivals", "Deals of the day", "Promotions"];

const SALES_OPTIONS = ["Daily best sellers", "Rising trends"];

const REVIEW_OPTIONS = [5, 4, 3, 2, 1];

const defaultFilters = {
	categories: ["Personal care", "Health Care", "Fresh Products", "Snacks", "Frozen Foods"],
	reviews: [5, 4, 3, 2, 1],
	price: "< $5",
	offers: [],
	sales: [],
};

function ReviewRow({ value, selected, onToggle }) {
	return (
		<label className="filter-modal-check-row">
			<input
				type="checkbox"
				checked={selected}
				onChange={() => onToggle(value)}
			/>
			<span className="filter-modal-stars" aria-label={`${value} stars and up`}>
				{Array.from({ length: 5 }, (_, index) => (
					<FaStar
						key={index}
						size={16}
						className={index < value ? "filter-modal-star-active" : "filter-modal-star-muted"}
					/>
				))}
			</span>
		</label>
	);
}

function CheckboxGroup({ options, selectedValues, onToggle }) {
	return options.map((option) => (
		<label key={option} className="filter-modal-check-row">
			<input
				type="checkbox"
				checked={selectedValues.includes(option)}
				onChange={() => onToggle(option)}
			/>
			<span>{option}</span>
		</label>
	));
}

export default function FilterModal({
	isOpen = true,
	onClose,
	onConfirm,
	initialFilters = {},
}) {
	const [filters, setFilters] = useState({
		...defaultFilters,
		...initialFilters,
	});

	useEffect(() => {
		setFilters({
			...defaultFilters,
			...initialFilters,
		});
	}, [initialFilters]);

	if (!isOpen) {
		return null;
	}

	const toggleArrayValue = (key, value) => {
		setFilters((current) => {
			const hasValue = current[key].includes(value);

			return {
				...current,
				[key]: hasValue
					? current[key].filter((item) => item !== value)
					: [...current[key], value],
			};
		});
	};

	const handleCancel = () => {
		setFilters({
			...defaultFilters,
			...initialFilters,
		});
		onClose?.();
	};

	const handleConfirm = () => {
		onConfirm?.(filters);
	};

	return (
		<div className="filter-modal-overlay" onClick={handleCancel}>
			<div
				className="filter-modal-card"
				onClick={(event) => event.stopPropagation()}
				role="dialog"
				aria-modal="true"
				aria-labelledby="filter-modal-title"
			>
				<h2 id="filter-modal-title" className="filter-modal-title">
					Filter Options
				</h2>

				<div className="filter-modal-grid">
					<section className="filter-modal-section">
						<h3 className="filter-modal-heading">Category</h3>
						{CheckboxGroup({
							options: CATEGORY_OPTIONS,
							selectedValues: filters.categories,
							onToggle: (value) => toggleArrayValue("categories", value),
						})}
					</section>

					<section className="filter-modal-section">
						<h3 className="filter-modal-heading">Reviews</h3>
						<div className="filter-modal-review-list">
							{REVIEW_OPTIONS.map((value) => (
								<ReviewRow
									key={value}
									value={value}
									selected={filters.reviews.includes(value)}
									onToggle={(reviewValue) => toggleArrayValue("reviews", reviewValue)}
								/>
							))}
						</div>
					</section>

					<section className="filter-modal-section">
						<h3 className="filter-modal-heading">Price</h3>
						<div className="filter-modal-price-list">
							{PRICE_OPTIONS.map((option) => (
								<button
									key={option}
									type="button"
									className={`filter-modal-price-pill ${filters.price === option ? "active" : ""}`}
									onClick={() => setFilters((current) => ({ ...current, price: option }))}
								>
									{option}
								</button>
							))}
						</div>
					</section>

					<section className="filter-modal-section">
						<h3 className="filter-modal-heading">Offers & Promotions</h3>
						{CheckboxGroup({
							options: OFFER_OPTIONS,
							selectedValues: filters.offers,
							onToggle: (value) => toggleArrayValue("offers", value),
						})}
					</section>

					<section className="filter-modal-section">
						<h3 className="filter-modal-heading">Sales</h3>
						{CheckboxGroup({
							options: SALES_OPTIONS,
							selectedValues: filters.sales,
							onToggle: (value) => toggleArrayValue("sales", value),
						})}
					</section>
				</div>

				<div className="filter-modal-actions">
					<button type="button" className="filter-modal-cancel" onClick={handleCancel}>
						CANCEL
					</button>
					<button type="button" className="filter-modal-confirm" onClick={handleConfirm}>
						CONFIRM
					</button>
				</div>
			</div>
		</div>
	);
}
