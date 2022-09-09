import { CardElement } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import { auth } from "Database/config";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import addPaymentMethod from "./addPaymentMethod";

const handleStripeCardNumber = async (
	name: string,
	address: string,
	postalCode: string,
	router: NextRouter,

	setButtonState: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	>,
	customerId?: string | null,
	stripe?: Stripe | null,
	elements?: StripeElements | null,
	countries?:
		| { name: string; iso2: string; states: { name: string }[] }[]
		| null,
	selectedCountry?: string | null,
	selectedCity?: string | null,
	selectedState?: string | null,
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null
) => {
	setButtonState("authenticating");
	try {
		const cardElement = elements?.getElement(CardElement);
		const country = countries?.find(
			(item) => item.name === selectedCountry
		)?.iso2;

		if (
			stripe &&
			selectedCountry &&
			selectedCity &&
			selectedState &&
			auth.currentUser?.email &&
			cardElement
		)
			await stripe
				.createPaymentMethod({
					type: "card",

					billing_details: {
						name,
						email: auth.currentUser?.email,
						address: {
							country,
							state: selectedState,
							postal_code: postalCode,
							city: selectedCity,
							line1: address,
						},
					},
					card: cardElement,
				})
				.then((resp) => {
					addPaymentMethod(
						router,
						setButtonState,
						customerId,
						resp.paymentMethod,
						setFormState
					);
				});
	} catch (err) {
		alert(err);
		setButtonState("error");
		setTimeout(() => setButtonState("default"), 1000);
	}
};

export default handleStripeCardNumber;
