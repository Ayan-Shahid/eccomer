/* eslint-disable indent */
import {
	CardCvcElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { PaymentIntent, PaymentMethod } from "@stripe/stripe-js";
import axios from "axios";
import { useToast } from "Hooks";
import React, { FormEvent, FunctionComponent, useState } from "react";
import { CheckCircle, ShoppingCart, XCircle } from "react-feather";
import { useTheme } from "styled-components";
import * as Styled from "styles/Cart/Details/CheckOut.elements";

interface CheckOutProps {
	paymentIntent?: PaymentIntent | null;
	paymentMethod?: PaymentMethod | null;
	openPaymentSuccess?: () => void | null;
}

const CheckOut: FunctionComponent<CheckOutProps> = ({
	paymentIntent,
	paymentMethod,
	openPaymentSuccess,
}: CheckOutProps) => {
	const { colors } = useTheme();
	const stripe = useStripe();
	const elements = useElements();
	const toast = useToast();
	const [buttonState, setButtonState] = useState<
		"default" | "processing" | "success" | "failed"
	>("default");

	const setButtonClasses = () => {
		switch (buttonState) {
			case "default":
				return "default";
				break;
			case "processing":
				return "processing";
				break;
			case "success":
				return "success";
				break;
			case "failed":
				return "failed";
				break;
			default:
				return "default";
		}
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setButtonState("processing");
		const cardElement = elements?.getElement(CardCvcElement);
		if (cardElement && paymentIntent && paymentMethod && stripe)
			stripe
				?.createToken("cvc_update", cardElement)
				.then(async (result) => {
					if (result.error) {
						toast.open({
							type: "error",
							title: "Card Error",
							text: "Something went wrong while confirming the payment.",
						});
						setButtonState("failed");
						setTimeout(() => setButtonState("default"), 1500);
					} else {
						await axios
							.post("http://localhost:3000/api/confirmPayment", {
								paymentMethod: paymentMethod?.id,
								paymentIntent: paymentIntent?.id,
							})
							.then((resp) => {
								handleServerResponse(resp.data);
							})
							.catch(() => {
								toast.open({
									type: "error",
									title: "Card Error",
									text: "Something went wrong while confirming the payment.",
								});
								setButtonState("failed");
								setTimeout(() => setButtonState("default"), 1500);
							});
					}
				})
				.catch(() => {
					toast.open({
						type: "error",
						title: "Card Error",
						text: "Something went wrong while confirming the payment.",
					});
					/* Handle error*/
					setButtonState("failed");
					setTimeout(() => setButtonState("default"), 1500);
				});
	};

	const handleServerResponse = (response: any) => {
		if (response.error) {
			toast.open({
				type: "error",
				title: "Card Error",
				text: "Something went wrong while confirming the payment.",
			});
			setButtonState("failed");
			setTimeout(() => setButtonState("default"), 1500);
			/* Handle Error */
		} else if (response.next_action) {
			handleAction(response);
		} else {
			setButtonState("success");
			setTimeout(() => setButtonState("default"), 1500);
			if (openPaymentSuccess) openPaymentSuccess();

			/* Handle Success */
		}
	};
	const handleAction = async (response: any) => {
		stripe?.handleCardAction(response.client_secret).then(async (result) => {
			if (result.error) {
				toast.open({
					type: "error",
					title: "Card Error",
					text: "Something went wrong while confirming the payment.",
				});
				setButtonState("failed");
				setTimeout(() => setButtonState("default"), 1500);
				/* Handle error */
			} else {
				await axios
					.post("http://localhost:3000/api/confirmPayment", {
						paymentIntent: paymentIntent?.id,
						paymentMethod: paymentMethod?.id,
					})
					.then((resp) => {
						handleServerResponse(resp.data);
					})
					.catch(() => {
						toast.open({
							type: "error",
							title: "Card Error",
							text: "Something went wrong while confirming the payment.",
						});
						setButtonState("failed");
						setTimeout(() => setButtonState("default"), 1500);
						/* Handle Error */
					});
			}
		});
	};

	return (
		<>
			<Styled.Wrapper onSubmit={handleSubmit}>
				<Styled.StripeInput type="button">
					<CardCvcElement
						options={{ style: { base: { color: colors.tertiary[100] } } }}
						className="stripeCvcElement"
					/>
				</Styled.StripeInput>
				<Styled.Button
					disabled={paymentIntent && buttonState === "default" ? false : true}
				>
					<ShoppingCart className={`checkout-icon ${setButtonClasses()}`} />
					<Styled.Text className={`default ${setButtonClasses()}`}>
						Place Order
					</Styled.Text>
					<Styled.Spinner className={setButtonClasses()} />
					<CheckCircle className={`success ${setButtonClasses()}`} />
					<XCircle className={`failed ${setButtonClasses()}`} />
				</Styled.Button>
			</Styled.Wrapper>
		</>
	);
};

export default CheckOut;
