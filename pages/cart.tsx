import { Details, Header, Table } from "Components/Cart";
import { useBoolean } from "Hooks";
import { PaymentSuccess } from "Illustrations";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { X } from "react-feather";
import * as Styled from "styles/Cart/index.elements";

const Cart: NextPage = () => {
	const {
		state: paymentSuccess,
		setTrue: openPaymentSuccess,
		setFalse: closePaymentSuccess,
	} = useBoolean();
	return (
		<>
			<Head>
				<title>Eccommer Cart</title>
			</Head>
			<Styled.Wrapper>
				<Styled.PaymentSuccess className={paymentSuccess ? "open" : "close"}>
					<PaymentSuccess />
					<Styled.Text>Your payment was successfull.</Styled.Text>
					<X className="closeIcon" onClick={closePaymentSuccess} />
				</Styled.PaymentSuccess>
				<Header />
				<Styled.Main>
					<Table />
					<Details openPaymentSuccess={openPaymentSuccess} />
				</Styled.Main>
			</Styled.Wrapper>
		</>
	);
};

export default Cart;
