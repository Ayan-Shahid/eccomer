/* eslint-disable indent */
import { PaymentIntent, PaymentMethod } from "@stripe/stripe-js";
import axios from "axios";
import { PaymentMethodCard } from "Components/Shared";
import { Context } from "Context/Provider";
import {
	useCurrencyConvertor,
	useNumberFormatter,
	usePaymentMethods,
	useToast,
	useUser,
} from "Hooks";
import React, { FunctionComponent, useContext, useState } from "react";
import * as Styled from "styles/Cart/Details/Main.elements";
import * as Shared from "styles/Shared/Loaders/Skeletons.elements";
import CheckOut from "./CheckOut";

interface MainProps {
	openPaymentSuccess?: () => void | null;
}

const Main: FunctionComponent<MainProps> = ({
	openPaymentSuccess,
}: MainProps) => {
	const { state } = useContext(Context);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
		number | null
	>(null);
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
		null
	);
	const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
		null
	);

	const user = useUser();
	const toast = useToast();

	const { methods } = usePaymentMethods();
	const subTotal = state.cart
		?.map((item) => item.price * item.quantity)
		.reduce((previous, next) => previous + next, 0);
	const shipping = state.cart
		?.map((item) => item.shippingPrice)
		.reduce((previous, next) => previous + next, 0);
	const total = subTotal && shipping ? subTotal + shipping : 0;

	const createPaymentIntent = async (
		paymentMethod: PaymentMethod,
		index: number
	) => {
		if (user?.customerId) {
			setSelectedPaymentMethod(index);
			await axios
				.post("http://localhost:3000/api/createPaymentIntent", {
					data: {
						amount: total,
						customerId: user?.customerId,
						paymentMethod: paymentMethod.id,
						currency: "USD",
					},
				})
				.then((resp) => {
					setPaymentMethod(paymentMethod);
					setPaymentIntent(resp.data.paymentIntent);
				})
				.catch((err) => {
					alert(err);
					toast.open({
						type: "error",
						title: "Payment Intent Error",
						text: "Something went wrong while creating the payment intent.",
					});
				});
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.Heading>Order Details</Styled.Heading>
			<Styled.Row>
				<Styled.Title>No of Items</Styled.Title>
				<Styled.Text>{state.cart?.length}</Styled.Text>
			</Styled.Row>
			<Styled.Row>
				<Styled.Title>Sub Total</Styled.Title>
				<Styled.Text>
					{useNumberFormatter(
						useCurrencyConvertor(subTotal || 0),
						state.currency
					)}
				</Styled.Text>
			</Styled.Row>
			<Styled.Row>
				<Styled.Title>Shipping</Styled.Title>
				<Styled.Text>
					{useNumberFormatter(
						useCurrencyConvertor(shipping || 0),
						state.currency
					)}
				</Styled.Text>
			</Styled.Row>
			<Styled.Row>
				<Styled.Title>Total</Styled.Title>
				<Styled.Text>
					{useNumberFormatter(useCurrencyConvertor(total || 0), state.currency)}
				</Styled.Text>
			</Styled.Row>
			<Styled.Row>
				<Styled.Title>Select Payment Method</Styled.Title>
			</Styled.Row>
			<Styled.List>
				{methods && methods.length > 0 ? (
					methods?.map((item, index) => (
						<Styled.ListItem
							onClick={() => createPaymentIntent(item, index)}
							key={item.id}
						>
							<PaymentMethodCard
								className={`paymentMethodCard
								${selectedPaymentMethod === index ? "selected" : ""}
							`}
								paymentMethod={item}
							/>
							<Styled.RadioButton
								className={
									selectedPaymentMethod === index ? "active" : "inactive"
								}
							/>
						</Styled.ListItem>
					))
				) : (
					<Shared.RectangleSkeleton
						width="100%"
						height="4rem"
						borderRadius="0.6rem"
					/>
				)}
			</Styled.List>
			<CheckOut
				openPaymentSuccess={openPaymentSuccess}
				paymentIntent={paymentIntent}
				paymentMethod={paymentMethod}
			/>
		</Styled.Wrapper>
	);
};

export default Main;
