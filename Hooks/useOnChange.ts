import { ChangeEvent, useState } from "react";
const useOnChange = (defaultValue?: string | null) => {
	const [state, setState] = useState<string | null | undefined>(
		defaultValue || ""
	);

	const handleState = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return { state, handleState };
};

export default useOnChange;
