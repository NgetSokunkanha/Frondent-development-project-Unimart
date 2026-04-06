import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import "../styles/loginModal.css";

export default function LoginModal({ isOpen, onClose, onSwitchToSignUp, onSubmitLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		setErrorMessage("");

		const handleEscKey = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleEscKey);

		return () => {
			window.removeEventListener("keydown", handleEscKey);
		};
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const maybeError = onSubmitLogin?.({ email, password }) ?? null;

		if (maybeError) {
			setErrorMessage(maybeError);
			return;
		}

		onClose();
	};

	return (
		<div className="login-modal-overlay" onClick={onClose}>
			<div
				className="login-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="login-modal-title"
				onClick={(event) => event.stopPropagation()}
			>
				<button className="login-modal-close" onClick={onClose} aria-label="Close login modal">
					<FiX size={20} />
				</button>

				<h2 id="login-modal-title">Welcome Back</h2>
				<p className="login-subtitle">Sign in to manage your orders and wishlist.</p>

				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="login-email">Email</label>
					<input
						id="login-email"
						type="email"
						placeholder="you@example.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>

					<label htmlFor="login-password">Password</label>
					<div className="password-wrapper">
						<input
							id="login-password"
							type={showPassword ? "text" : "password"}
							placeholder="Enter your password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
							minLength={6}
						/>
						<button
							type="button"
							className="password-toggle"
							onClick={() => setShowPassword((prev) => !prev)}
							aria-label={showPassword ? "Hide password" : "Show password"}
						>
							{showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
						</button>
					</div>

					<button type="submit" className="login-submit-btn">
						Login
					</button>

					{errorMessage && <p className="login-error-copy">{errorMessage}</p>}

					<p className="login-switch-copy">
						New here?{" "}
						<button type="button" className="login-switch-btn" onClick={onSwitchToSignUp}>
							Create account
						</button>
					</p>
				</form>
			</div>
		</div>
	);
}
