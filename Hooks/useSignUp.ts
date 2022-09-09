import { createAccount } from "Components/Auth/SignUp/functions";
import { validationSchema } from "Components/Auth/SignUp/validationSchema";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";

const useSignUp = (
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null
) => {
	const [buttonState, setButtonState] = useState<
		"default" | "authenticating" | "successfull" | "error"
	>("default");
	const form = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			createAccount(
				values.username,
				values.email,
				values.password,
				setButtonState,
				setFormState
			).catch((error) => alert(error));
		},
		validationSchema,
	});
	return { ...form, buttonState, setButtonState };
};

export default useSignUp;
