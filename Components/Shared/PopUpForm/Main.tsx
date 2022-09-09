import { Button, Input } from "Components/Auth";
import { validationSchema } from "Components/Auth/SignIn/validationSchema";
import { auth } from "Database/config";
import {
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
} from "firebase/auth";
import { useFormik } from "formik";
import { useBoolean, useToast } from "Hooks";
import React, { FunctionComponent, useState } from "react";
import { Eye, EyeOff, Info, Key, User } from "react-feather";
import * as Styled from "styles/Shared/PopUpForm/Main.elements";

interface MainProps {
	isOpen: boolean;
	closePopUp: () => void;
	newEmail?: string | null;
}

const Main: FunctionComponent<MainProps> = ({
	isOpen,
	closePopUp,
	newEmail,
}) => {
	const {
		state: visible,
		setTrue: isVisible,
		setFalse: notVisible,
	} = useBoolean();

	const toast = useToast();

	const passwordRightIcon = visible ? (
		<Eye className="right-icon" onClick={notVisible} />
	) : (
		<EyeOff className="right-icon" onClick={isVisible} />
	);
	const passwordType = visible ? "text" : "password";

	const [buttonState, setButtonState] = useState<
		"default" | "authenticating" | "successfull" | "error"
	>("default");

	const emailUpdate = () => {
		if (auth.currentUser && newEmail)
			updateEmail(auth.currentUser, newEmail)
				.then(() => {
					toast.open({
						type: "success",
						title: "User updated!",
						text: "You'r email was updated successfully.",
					});
					setButtonState("successfull");
					setTimeout(() => setButtonState("default"), 1000);
					setTimeout(() => closePopUp(), 2000);
				})
				.catch(() => {
					toast.open({
						type: "error",
						title: "Error!",
						text: "Oh no something went wrong.",
					});
					setButtonState("error");
					setTimeout(() => setButtonState("default"), 1000);
				});
	};

	const reauthenticate = (email: string, password: string) => {
		const credentials = EmailAuthProvider.credential(email, password);
		if (auth.currentUser) {
			setButtonState("authenticating");
			reauthenticateWithCredential(auth.currentUser, credentials)
				.then(() => {
					emailUpdate();
				})
				.catch(() => {
					toast.open({
						type: "error",
						title: "Error!",
						text: "Oh no something went wrong. Please make sure you entered the correct email and password.",
					});
					setButtonState("error");
					setTimeout(() => setButtonState("default"), 1000);
				});
		}
	};

	const { handleSubmit, getFieldProps, getFieldMeta } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			reauthenticate(values.email, values.password);
		},
		validationSchema,
	});
	return (
		<Styled.Wrapper className={isOpen ? "" : "close"} onSubmit={handleSubmit}>
			<Styled.Title>Reauthenticate</Styled.Title>
			<Input
				{...getFieldProps("email")}
				{...getFieldMeta("email")}
				leftIcon={<User className="left-icon" />}
				placeholder="Email"
				type="email"
				className="input"
			/>
			<Input
				{...getFieldProps("password")}
				{...getFieldMeta("password")}
				leftIcon={<Key className="left-icon" />}
				placeholder="Password"
				rightIcon={passwordRightIcon}
				type={passwordType}
				className="input"
			/>
			<Styled.Row>
				<Styled.Cancel onClick={closePopUp} type="button">
					<Info className="cancel-icon" />
					Cancel
				</Styled.Cancel>
				<Button
					type="submit"
					className="button"
					state={buttonState}
					text="Continue"
				/>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Main;
