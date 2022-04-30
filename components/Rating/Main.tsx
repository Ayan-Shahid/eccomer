import React, { FunctionComponent } from "react";
import Star from "icons/Bulk/Star.svg";
import * as Styled from "styles/Rating/Main.elements";

interface IMain {
	length?: number;
	rating?: number;
}

const Main: FunctionComponent<IMain> = ({ length, rating }: IMain) => {
	const setStar = (index: number) => {
		if (rating) {
			return index <= rating - 1 ? "true" : "false";
		}
	};
	return (
		<Styled.Wrapper>
			{new Array(length).fill(null).map((item, index) => (
				<Styled.Star key={index} active={setStar(index)}>
					<Star />
				</Styled.Star>
			))}
		</Styled.Wrapper>
	);
};

export default Main;
