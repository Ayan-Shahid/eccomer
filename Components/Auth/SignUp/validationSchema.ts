import * as yup from "yup";

export const validationSchema = yup.object({
	username: yup
		.string()
		.min(4, "Username should be greater than 4 characters.")
		.required("Username is required."),
	email: yup
		.string()
		.email("Please enter a valid email.")
		.required("Email is required."),
	password: yup
		.string()
		.required("Password is required.")
		.min(6, "Password should be greater than 4 characters."),
});
