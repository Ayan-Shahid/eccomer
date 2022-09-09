import { auth } from "Database/config";
import {
	GoogleAuthProvider,
	signInWithPopup,
	updateEmail,
} from "firebase/auth";
import { useOnChange, useToast } from "Hooks";

const useEmailUpdate = (openPopUp: () => void) => {
	const toast = useToast();
	const { state: email, handleState: handleEmail } = useOnChange(
		auth.currentUser?.email
	);

	const update = () => {
		if (auth.currentUser && email && email !== auth.currentUser.email) {
			updateEmail(auth.currentUser, email)
				.then(() => {
					toast.open({
						type: "success",
						title: "User updated!",
						text: "You'r email was updated successfully.",
					});
				})
				.catch(() => {
					toast.open({
						type: "error",
						title: "Error!",
						text: "Oh no something went wrong.",
					});
				});
		}
	};

	const uploadEmail = () => {
		if (auth.currentUser && email !== auth.currentUser.email) {
			if (auth.currentUser.providerData[0].providerId === "google.com") {
				signInWithPopup(auth, new GoogleAuthProvider())
					.then(() => update())
					.catch((error) => {
						console.log(error);
						toast.open({
							type: "error",
							title: "Error!",
							text: "Something went wrong while signing in",
						});
					});
			} else openPopUp();
		} else {
			toast.open({
				type: "error",
				title: "Error!",
				text: "New email cannot be the same as old email.",
			});
		}
	};

	return { email, handleEmail, uploadEmail };
};

export default useEmailUpdate;
