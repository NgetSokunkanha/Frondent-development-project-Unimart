import "../styles/Badge.css";

const badgeClassNames = {
	New: "badge badge-new",
	Best: "badge badge-best",
	Sale: "badge badge-sale",
};

export default function Badge({ label }) {
	if (!label || !badgeClassNames[label]) {
		return null;
	}

	return (
		<span className={badgeClassNames[label]}>
			{label}
		</span>
	);
}
