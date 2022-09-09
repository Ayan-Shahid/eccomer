import { auth } from "Database/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import createStripeUser from "./createStripeUser";

const signInWithGoogle = async (
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null
) => {
	return await signInWithPopup(auth, new GoogleAuthProvider())
		.then(({ user }) => {
			if (user.displayName && user.email && user.photoURL)
				createStripeUser(user?.displayName, user.email, user.uid);
		})
		.then(() => {
			if (setFormState) setFormState("payment form");
		})
		.catch((error) => alert(error));
};

export default signInWithGoogle;
