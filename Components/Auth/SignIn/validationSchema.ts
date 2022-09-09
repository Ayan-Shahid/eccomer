import * as yup from "yup";

export const validationSchema = yup.object({
	email: yup
		.string()
		.email("Please enter a valid email.")
		.required("Email is required."),
	password: yup
		.string()
		.required("Password is required.")
		.min(4, "Password should be greater than 4 characters."),
});
