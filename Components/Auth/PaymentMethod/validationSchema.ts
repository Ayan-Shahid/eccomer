import * as yup from "yup";

export const validationSchema = yup.object({
	cardHolderName: yup.string().required("This field is required."),
	address: yup
		.string()
		.required("This field is required.")
		.min(10, "Please enter your full address."),
	postalCode: yup
		.string()
		.required("This field is required.")
		.min(4, "Please enter a valid postal code."),
});
