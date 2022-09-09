import { auth } from "Database/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import createStripeUser from "./createStripeUser";

const createAccount = async (
	username: string,
	email: string,
	password: string,
	setButtonState: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	>,
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null
) => {
	setButtonState("authenticating");
	return await createUserWithEmailAndPassword(auth, email, password)
		.then((data) => {
			createStripeUser(username, email, data.user.uid, setButtonState);
		})
		.then(() => setButtonState("successfull"))
		.then(() => setTimeout(() => setButtonState("default"), 1000))
		.then(() => {
			setTimeout(() => {
				if (setFormState) setFormState("payment form");
			}, 1500);
		})
		.catch((error) => {
			alert(error);
			setButtonState("error");
			setTimeout(() => setButtonState("default"), 1000);
		});
};

export default createAccount;
