import { useOnChange, useToast } from "Hooks";
import { updateProfile } from "firebase/auth";
import { auth } from "Database/config";

const useUsernameUpdate = () => {
	const toast = useToast();
	const { state: username, handleState: handleName } = useOnChange(
		auth.currentUser?.displayName
	);
	const uploadUsername = () => {
		if (
			auth.currentUser &&
			username &&
			username.length > 2 &&
			username !== auth.currentUser.displayName
		)
			updateProfile(auth.currentUser, { displayName: username })
				.then(() =>
					toast.open({
						type: "success",
						title: "Success!",
						text: "The username was updated successfully.",
					})
				)
				.catch(() =>
					toast.open({
						type: "error",
						title: "Update Error!",
						text: "Something went wrong while updating the username.",
					})
				);
		else {
			toast.open({
				type: "error",
				title: "Invalid Username",
				text: "Username must be greater than 4 characters and cannot be the same as previous username.",
			});
		}
	};

	return { uploadUsername, username, handleName };
};

export default useUsernameUpdate;
