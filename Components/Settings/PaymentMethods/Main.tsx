/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import { PaymentMethodCard } from "Components/Shared";
import { usePaymentMethods } from "Hooks";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Settings/PaymentMethods/Main.elements";
import * as Shared from "styles/Shared/Loaders/Skeletons.elements";

const Main: FunctionComponent = () => {
	const { methods } = usePaymentMethods();
	return (
		<Styled.Wrapper>
			<Styled.Heading>Payment Methods</Styled.Heading>
			{methods && methods.length > 0 ? (
				methods?.map((item) => (
					<PaymentMethodCard paymentMethod={item} key={item.id} />
				))
			) : (
				<Shared.RectangleSkeleton
					width="100%"
					height="4rem"
					borderRadius="0.6rem"
				/>
			)}
		</Styled.Wrapper>
	);
};

export default Main;
