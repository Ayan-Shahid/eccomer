import { auth } from "Database/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

const login = async (
	email: string,
	password: string,
	setButtonState: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	>
) => {
	setButtonState("authenticating");
	return await signInWithEmailAndPassword(auth, email, password)
		.then(() => setButtonState("successfull"))
		.then(() => setTimeout(() => setButtonState("default"), 1000))

		.catch(() => {
			setButtonState("error");
			setTimeout(() => setButtonState("default"), 1000);
		});
};
export default login;
