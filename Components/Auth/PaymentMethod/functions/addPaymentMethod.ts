import { PaymentMethod } from "@stripe/stripe-js";
import axios from "axios";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

const addPaymentMethod = async (
	router: NextRouter,
	setButtonState: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	>,
	customer?: string | null,
	paymentMethod?: PaymentMethod,
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null
) => {
	await axios
		.post("http://localhost:3000/api/paymentMethod", {
			method: {
				...paymentMethod,
				customer,
			},
		})
		.catch((error) => {
			alert(error);
			setButtonState("error");
			setTimeout(() => setButtonState("default"), 1000);
		})
		.then((res) => {
			console.log(res);
			setButtonState("successfull");
			setTimeout(() => {
				setButtonState("default");
				if (setFormState) setFormState("completed");
			}, 1000);
			setTimeout(() => router.push("/"), 1500);
		});
};

export default addPaymentMethod;
