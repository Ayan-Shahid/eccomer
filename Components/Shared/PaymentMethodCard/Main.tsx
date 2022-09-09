import { PaymentMethod } from "@stripe/stripe-js";
import React, { FunctionComponent, HTMLAttributes } from "react";
import * as Styled from "styles/Shared/PaymentMethodCard/Main.elements";

interface MainProps extends HTMLAttributes<HTMLElement> {
	paymentMethod?: PaymentMethod;
}

const Main: FunctionComponent<MainProps> = ({
	paymentMethod,
	...props
}: MainProps) => {
	return (
		<Styled.Wrapper {...props}>
			<Styled.Figure></Styled.Figure>
			<Styled.Row>
				<Styled.Number>****{paymentMethod?.card?.last4}</Styled.Number>
				<Styled.Name>{paymentMethod?.billing_details.name}</Styled.Name>
			</Styled.Row>
			<Styled.ExpiryDate>
				Expires {paymentMethod?.card?.exp_month}/{paymentMethod?.card?.exp_year}
			</Styled.ExpiryDate>
		</Styled.Wrapper>
	);
};

export default Main;
