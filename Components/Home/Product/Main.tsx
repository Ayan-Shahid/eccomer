/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { Context } from "Context/Provider";
import { useCurrencyConvertor, useNumberFormatter } from "Hooks";
import React, { FunctionComponent, useContext } from "react";
import { ShoppingCart, Star } from "react-feather";
import * as Styled from "styles/Home/Product/Main.elements";

interface MainProps {
	id: string;
	name: string;
	price: number;
	photoUrl: string;
	shippingPrice: number;
}

const Main: FunctionComponent<MainProps> = ({
	id,
	name,
	price,
	photoUrl,
	shippingPrice,
}: MainProps) => {
	const { state, dispatch } = useContext(Context);
	const addToCart = () => {
		const itemExists = state.cart
			? state.cart.find((item) => item.id === id)
			: null;
		itemExists
			? state.cart?.map((item) => (item.id === id ? item.quantity++ : 0))
			: dispatch({
					type: "ADD",
					payload: {
						cart: { id, price, quantity: 1, name, photoUrl, shippingPrice },
					},
			  });
	};
	return (
		<Styled.Wrapper>
			<Styled.Figure>
				<Styled.Picture alt="product" layout="fill" src={photoUrl} />
			</Styled.Figure>
			<Styled.Caption>
				<Styled.Text>{name}</Styled.Text>
				<Styled.Label>
					Price:&nbsp;
					{useNumberFormatter(useCurrencyConvertor(price || 0), state.currency)}
				</Styled.Label>

				<Styled.Rating>
					{Array(5)
						.fill("", 0, 5)
						.map((item, index) => (
							<Star key={index} className="rating-icon" />
						))}
				</Styled.Rating>
				<Styled.Button onClick={addToCart}>
					<ShoppingCart className="button-icon" />
					<Styled.Label>Add To Cart</Styled.Label>
				</Styled.Button>
			</Styled.Caption>
		</Styled.Wrapper>
	);
};

export default Main;
