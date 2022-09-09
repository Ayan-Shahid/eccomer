/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { Context } from "Context/Provider";
import React, { FunctionComponent, useContext } from "react";
import * as Styled from "styles/Cart/Table/Main.elements";
import Head from "./Head";
import Item from "./Item";

const Main: FunctionComponent = () => {
	const { state } = useContext(Context);
	return (
		<Styled.Wrapper>
			<Styled.Table>
				<tbody>
					<Head />
					{state.cart
						? state.cart.map((item, index) => (
								<Item {...item} index={index + 1} key={index} />
						  ))
						: null}
				</tbody>
			</Styled.Table>
		</Styled.Wrapper>
	);
};

export default Main;
