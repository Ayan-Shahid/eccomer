import React, { FunctionComponent, MouseEventHandler, useState } from "react";
import { Eye, EyeOff, Key, Mail } from "react-feather";
import * as Styled from "styles/Auth/Form/Main.elements";
import { Button, Input } from "Components/Auth";
import { useFormik } from "formik";
import { useBoolean, useToast } from "Hooks";
import { login } from "./functions";
import { validationSchema } from "./validationSchema";
import { useRouter } from "next/router";
interface MainProps {
	clickOnSignUp?: MouseEventHandler<HTMLParagraphElement>;
}

const Main: FunctionComponent<MainProps> = ({ clickOnSignUp }: MainProps) => {
	const [buttonState, setButtonState] = useState<
		"default" | "authenticating" | "successfull" | "error"
	>("default");
	const { state: showPassword, toggle: toggleShowPassword } = useBoolean();

	const router = useRouter();
	const toast = useToast();

	const { handleSubmit, getFieldProps, getFieldMeta } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			login(values.email, values.password, setButtonState)
				.then(() => router.push("/"))
				.catch(() =>
					toast.open({
						type: "error",
						title: "Username Error",
						text: "Please enter correct credentials.",
					})
				);
		},
		validationSchema,
	});
	return (
		<Styled.Wrapper onSubmit={handleSubmit}>
			<Styled.Title>Sign In</Styled.Title>
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
				rightIcon={
					showPassword ? (
						<EyeOff onClick={toggleShowPassword} className="right-icon" />
					) : (
						<Eye onClick={toggleShowPassword} className="right-icon" />
					)
				}
				type={showPassword ? "text" : "password"}
			/>
			<Button
				disabled={buttonState === "default" ? false : true}
				text="Login"
				type="submit"
				state={buttonState}
			/>
			<Styled.Text>Don&apos;t have an account?</Styled.Text>
			<Styled.Link onClick={clickOnSignUp}>Sign Up</Styled.Link>
		</Styled.Wrapper>
	);
};

export default Main;
