import React, { FunctionComponent } from "react";
import * as Styled from "styles/Cart/Table/Head.elements";

const Head: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Item>
				<Styled.Text>No</Styled.Text>
			</Styled.Item>
			<Styled.Item>
				<Styled.Text>Item</Styled.Text>
			</Styled.Item>
			<Styled.Item>
				<Styled.Text>Price</Styled.Text>
			</Styled.Item>
			<Styled.Item>
				<Styled.Text>Quantity</Styled.Text>
			</Styled.Item>
		</Styled.Wrapper>
	);
};

export default Head;
