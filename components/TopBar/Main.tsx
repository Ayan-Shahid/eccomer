import React, { FunctionComponent } from "react";
import Input from "./Input";
import Filter from "icons/Light/Filter.svg";
import Buy from "icons/Light/Buy.svg";

import * as Styled from "styles/TopBar/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<span />
			<Input />
			<Styled.Aside>
				<Styled.Icon>
					<Buy />
					<Styled.Badge>
						<p>12</p>
					</Styled.Badge>
				</Styled.Icon>
				<Styled.Icon>
					<Filter />
				</Styled.Icon>
			</Styled.Aside>
		</Styled.Wrapper>
	);
};

export default Main;
