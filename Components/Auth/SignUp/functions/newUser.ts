import { auth, firestore } from "Database/config";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

const newUser = async (
	username: string,
	uid: string,
	customerId: string,
	setButtonState?: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	> | null
) => {
	if (auth.currentUser)
		updateProfile(auth.currentUser, { displayName: username }).catch((error) =>
			alert(error)
		);
	await setDoc(
		doc(firestore, `Users/${uid}`),
		{
			customerId,
		},
		{ merge: true }
	).catch((error) => {
		if (setButtonState) {
			setButtonState("error");
			alert(error);
			setTimeout(() => setButtonState("default"), 2000);
		}
	});
};

export default newUser;
