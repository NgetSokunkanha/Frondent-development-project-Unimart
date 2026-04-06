import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiUserPlus, FiX } from "react-icons/fi";
import "../styles/signUpModal.css";

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin, onSubmitSignUp }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match.");
			return;
		}

		const maybeError = onSubmitSignUp?.({ name, email, password }) ?? null;

		if (maybeError) {
			setErrorMessage(maybeError);
			return;
		}

		onClose();
	};

	return (
		<div className="signup-modal-overlay" onClick={onClose}>
			<div
				className="signup-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="signup-modal-title"
				onClick={(event) => event.stopPropagation()}
			>
				<button className="signup-modal-close" onClick={onClose} aria-label="Close sign up modal">
					<FiX size={20} />
				</button>

				<p className="signup-tag">
					<FiUserPlus size={14} />
					Join UniMart
				</p>
				<h2 id="signup-modal-title">Create Account</h2>
				<p className="signup-subtitle">Sign up to save favorites and checkout faster.</p>

				<form className="signup-form" onSubmit={handleSubmit}>
					<label htmlFor="signup-name">Full name</label>
					<input
						id="signup-name"
						type="text"
						placeholder="Your full name"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>

					<label htmlFor="signup-email">Email</label>
					<input
						id="signup-email"
						type="email"
						placeholder="you@example.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>

					<label htmlFor="signup-password">Password</label>
					<div className="signup-password-wrapper">
						<input
							id="signup-password"
							type={showPassword ? "text" : "password"}
							placeholder="Create a password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
							minLength={6}
						/>
						<button
							type="button"
							className="signup-password-toggle"
							onClick={() => setShowPassword((prev) => !prev)}
							aria-label={showPassword ? "Hide password" : "Show password"}
						>
							{showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
						</button>
					</div>

					<label htmlFor="signup-confirm-password">Confirm password</label>
					<div className="signup-password-wrapper">
						<input
							id="signup-confirm-password"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Re-enter password"
							value={confirmPassword}
							onChange={(event) => setConfirmPassword(event.target.value)}
							required
							minLength={6}
						/>
						<button
							type="button"
							className="signup-password-toggle"
							onClick={() => setShowConfirmPassword((prev) => !prev)}
							aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
						>
							{showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
						</button>
					</div>

					<button type="submit" className="signup-submit-btn">
						Sign Up
					</button>

					{errorMessage && <p className="signup-error-copy">{errorMessage}</p>}

					<p className="signup-switch-copy">
						Already have an account?{" "}
						<button type="button" className="signup-switch-btn" onClick={onSwitchToLogin}>
							Login
						</button>
					</p>
				</form>
			</div>
		</div>
	);
}
