import { Google } from "Icons";
import React, {
	Dispatch,
	FunctionComponent,
	MouseEventHandler,
	SetStateAction,
} from "react";
import { Eye, EyeOff, Key, Mail, User } from "react-feather";
import * as Styled from "styles/Auth/Form/Main.elements";
import { Button, Input } from "..";
import { useBoolean, useSignUp } from "Hooks";
import { signiInWithGoogle } from "./functions";

interface MainProps {
	clickOnSignIn?: MouseEventHandler<HTMLParagraphElement>;
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null;
}

const Main: FunctionComponent<MainProps> = ({
	clickOnSignIn,
	setFormState,
}: MainProps) => {
	const { state: showPassword, toggle: toggleShowPassword } = useBoolean();

	const passwordRightIcon = showPassword ? (
		<EyeOff onClick={toggleShowPassword} className="right-icon" />
	) : (
		<Eye onClick={toggleShowPassword} className="right-icon" />
	);

	const googleSignIn = () => {
		signiInWithGoogle(setFormState);
	};

	const { handleSubmit, getFieldProps, getFieldMeta, buttonState } =
		useSignUp(setFormState);

	return (
		<Styled.Wrapper onSubmit={handleSubmit}>
			<Styled.Title>Sign Up</Styled.Title>
			<Input
				leftIcon={<User className="left-icon" />}
				placeholder="Username"
				{...getFieldProps("username")}
				{...getFieldMeta("username")}
			/>
			<Input
				{...getFieldProps("email")}
				{...getFieldMeta("email")}
				leftIcon={<Mail className="left-icon" />}
				placeholder="Email"
				type="email"
			/>
			<Input
				{...getFieldProps("password")}
				{...getFieldMeta("password")}
				leftIcon={<Key className="left-icon" />}
				placeholder="Password"
				rightIcon={passwordRightIcon}
				type={showPassword ? "text" : "password"}
			/>
			<Button
				disabled={buttonState === "default" ? false : true}
				text="Create Account"
				state={buttonState}
				type="submit"
			/>
			<Styled.Text>Already have an account?</Styled.Text>
			<Styled.Link onClick={clickOnSignIn}>Sign In</Styled.Link>
			<Styled.Text>Or</Styled.Text>
			<Styled.Button type="button" onClick={googleSignIn}>
				<Google />
				Sign in With Google
			</Styled.Button>
		</Styled.Wrapper>
	);
};

export default Main;
