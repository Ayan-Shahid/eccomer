import { Context } from "Context/Provider";
import { useCurrencyConvertor, useNumberFormatter } from "Hooks";
import React, { FunctionComponent, useContext } from "react";
import * as Styled from "styles/Cart/Table/Item.elements";

interface ItemProps {
	index?: number;
	name: string;
	price: number;
	quantity: number;
	photoUrl: string;
}

const Item: FunctionComponent<ItemProps> = ({
	index,
	name,
	price,
	quantity,
	photoUrl,
}: ItemProps) => {
	const { state } = useContext(Context);
	return (
		<Styled.Wrapper>
			<Styled.Item>
				<Styled.Text>{index}</Styled.Text>
			</Styled.Item>
			<Styled.Item>
				<Styled.Product>
					<Styled.Figure>
						<Styled.Picture layout="fill" alt="item" src={photoUrl} />
					</Styled.Figure>
					<Styled.Caption>
						<Styled.Text>{name}</Styled.Text>
					</Styled.Caption>
				</Styled.Product>
			</Styled.Item>
			<Styled.Item>
				<Styled.Text>
					{useNumberFormatter(useCurrencyConvertor(price || 0), state.currency)}
				</Styled.Text>
			</Styled.Item>
			<Styled.Item>
				<Styled.Text>{quantity}</Styled.Text>
			</Styled.Item>
		</Styled.Wrapper>
	);
};

export default Item;
