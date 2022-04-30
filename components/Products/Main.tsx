import { ProductCard } from "components";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Products/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Heading>Latest Trends</Styled.Heading>
			<Styled.List>
				{new Array(20).fill(null).map((item, index) => (
					<ProductCard key={index} />
				))}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default Main;
