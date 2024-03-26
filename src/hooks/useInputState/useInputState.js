import { useState } from "react";

export default function useInputState(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);

	const onChange = (e) => {
		setValue(e.target.value);
		// console.log("handleChange:", e.target.value);
	};
	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// };
	// return [value, handleChange];
	return {
		value,
		onChange,
	};
}
