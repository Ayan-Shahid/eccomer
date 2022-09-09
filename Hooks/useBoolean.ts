import { useState } from "react";

const useBoolean = () => {
	const [state, setState] = useState(false);

	const setTrue = () => setState(true);
	const setFalse = () => setState(false);

	const toggle = () => setState(!state);

	return { state, setTrue, setFalse, toggle };
};

export default useBoolean;
