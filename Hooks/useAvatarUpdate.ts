/* eslint-disable prefer-const */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { auth, cloudStorage } from "Database/config";
import { updateProfile } from "firebase/auth";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import { useToast } from "Hooks";
import { ChangeEvent, RefObject, useState } from "react";

const useAvatarUpdate = (inputRef: RefObject<HTMLInputElement>) => {
	const toast = useToast();

	const [displayPicture, setDisplayPicture] = useState<File | null>(null);
	const displayPictureRef = ref(
		cloudStorage,
		`avatars/${auth.currentUser?.uid}`
	);
	const downloadDisplayPicture = () => {
		getDownloadURL(displayPictureRef)
			.then((url: string) =>
				auth.currentUser
					? updateProfile(auth.currentUser, { photoURL: url })
							.then(() =>
								toast.open({
									type: "success",
									title: "Update Success!",
									text: "The user's display picture was updated successfully.",
								})
							)
							.catch(() =>
								toast.open({
									type: "error",
									title: "Update Failed!",
									text: "Something went wrong while updating the user's display picture.",
								})
							)
					: null
			)
			.catch(() =>
				toast.open({
					type: "error",
					title: "Update Failed!",
					text: "Something went wrong while downloading the user's display picture.",
				})
			);
	};
	const removeDisplayPicture = () => {
		deleteObject(displayPictureRef).catch(() =>
			toast.open({
				type: "error",
				title: "Error!",
				text: "Something went wrong while deleting the user's display picture.",
			})
		);
		auth.currentUser
			? updateProfile(auth.currentUser, { photoURL: "" })
					.then(() =>
						toast.open({
							type: "success",
							title: "Update Success!",
							text: "The user's display picture was updated successfully.",
						})
					)
					.catch(() =>
						toast.open({
							type: "error",
							title: "Update Failed!",
							text: "Something went wrong while updating the user's display picture.",
						})
					)
			: null;
	};

	const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) setDisplayPicture(event.target.files[0]);
	};

	const openFileInput = () => {
		inputRef.current?.click();
	};

	const uploadAvatar = () => {
		if (auth.currentUser?.uid && displayPicture)
			uploadBytes(displayPictureRef, displayPicture)
				.then(() => downloadDisplayPicture())
				.catch(() =>
					toast.open({
						type: "error",
						title: "Update Error!",
						text: "Something went wrong while uploading the user's avatar.",
					})
				);
	};

	return {
		uploadAvatar,
		openFileInput,
		handleFileInput,
		removeDisplayPicture,
	};
};

export default useAvatarUpdate;
