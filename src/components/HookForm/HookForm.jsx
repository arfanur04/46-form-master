import useInputState from "../../hooks/useInputState/useInputState";

const HookForm = () => {
	// const [name, handleNameChange] = useInputState("Rojoni hooked");

	// const nameState = useInputState("Rojoni hooked");
	const emailState = useInputState("rojoni@sojoni.com");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form data:", emailState.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					// value={name}
					// onChange={handleNameChange}
					type="text"
					name="name"
					id=""
				/>
				<br />
				<input
					{...emailState}
					type="email"
					name="email"
					id=""
				/>
				<br />
				<input
					type="password"
					name="password"
					id=""
				/>
				<br />
				<input
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default HookForm;
