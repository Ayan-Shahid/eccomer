/* eslint-disable no-mixed-spaces-and-tabs */
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Shared/TopBar/Main.elements";
import Input from "./Input";
import RightSide from "./RightSide";

interface MainProps {
	currenciesList?:
		| {
				currencies: {
					[key: string]: { name: string };
				};
				flags: { png: string };
		  }[]
		| null;
}

const Main: FunctionComponent<MainProps> = ({ currenciesList }: MainProps) => {
	return (
		<Styled.Header>
			<span />
			<Input />
			<RightSide currenciesList={currenciesList} />
		</Styled.Header>
	);
};

export default Main;
