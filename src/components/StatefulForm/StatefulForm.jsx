import { useState } from "react";

const StatefulForm = () => {
	const [name, set_name] = useState("Rojoni Klanto");
	const [email, set_email] = useState(null);
	const [password, set_password] = useState(null);
	const [error, set_error] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password.length < 6) {
			set_error("password must be at least 6 characters");
		} else {
			set_error("");
		}
		console.log(name, email, password);
	};

	const handleEmailChange = (e) => {
		set_email(e.target.value);
	};

	const handlePasswordChange = (e) => {
		set_password(e.target.value);
	};

	const handleNameChange = (e) => {
		set_name(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={name}
					onChange={handleNameChange}
					type="text"
					name="name"
					id=""
				/>
				<br />
				<input
					onChange={handleEmailChange}
					type="email"
					name="email"
					id=""
				/>
				<br />
				<input
					onChange={handlePasswordChange}
					type="password"
					name="password"
					id=""
					required
				/>
				<br />
				<input
					type="submit"
					value="Submit"
				/>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default StatefulForm;
