import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function renderStar(index, rating) {
	if (index <= Math.floor(rating)) {
		return <FaStar key={index} size={11} color="#f47c20" />;
	}

	if (index - rating < 1 && rating % 1 >= 0.5) {
		return <FaStarHalfAlt key={index} size={11} color="#f47c20" />;
	}

	return <FaRegStar key={index} size={11} color="#ddd" />;
}

export default function StarRating({ rating = 4 }) {
	return (
		<div className="star-rating" aria-label={`Rating ${rating.toFixed(1)} out of 5`}>
			{[1, 2, 3, 4, 5].map((index) => renderStar(index, rating))}
			<span className="star-rating-count">({rating.toFixed(1)})</span>
		</div>
	);
}
