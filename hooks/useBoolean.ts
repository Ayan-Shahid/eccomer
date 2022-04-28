import { useState } from "react";

const useBoolean = () => {
	const [value, setValue] = useState(false);

	const toggle = () => setValue(!value);

	const setTrue = () => setValue(true);

	const setFalse = () => setValue(false);

	return { toggle, setTrue, setFalse, value };
};

export default useBoolean;
