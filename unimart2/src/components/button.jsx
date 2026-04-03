import { FiShoppingCart } from "react-icons/fi";
import "../styles/button.css";

export default function Button({
	label = "Buy Now",
	disabled = false,
	onClick,
}) {
	return (
		<button
			type="button"
			className={`buy-now-btn ${disabled ? "buy-now-btn-disabled" : ""}`}
			onClick={onClick}
			disabled={disabled}
		>
			<span>{label}</span>
			<FiShoppingCart size={13} />
		</button>
	);
}
