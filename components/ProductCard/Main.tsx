import { Rating } from "components";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/ProductCard/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Image>
				<Image
					alt="product"
					src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					layout="fill"
					objectFit="cover"
				/>
			</Styled.Image>
			<Styled.Caption>
				<Styled.Row>
					<Styled.Body>Nike Shoes</Styled.Body>
					<Styled.Label>120$</Styled.Label>
				</Styled.Row>
				<Styled.Row>
					<Rating length={5} rating={5} />
				</Styled.Row>
			</Styled.Caption>
		</Styled.Wrapper>
	);
};

export default Main;
