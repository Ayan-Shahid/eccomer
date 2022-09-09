import Link from "next/link";
import React, { FunctionComponent } from "react";
import { ChevronLeft } from "react-feather";
import * as Styled from "styles/Cart/Header/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Link href="/">
				<Styled.Button>
					<ChevronLeft className="return-icon" />
				</Styled.Button>
			</Link>
			<Styled.Heading>Shopping Cart</Styled.Heading>
		</Styled.Wrapper>
	);
};

export default Main;
