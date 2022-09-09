import React, { FunctionComponent } from "react";
import * as Styled from "styles/Home/Filters/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Chip>
				<Styled.Text>Category</Styled.Text>
			</Styled.Chip>
			<Styled.Chip>
				<Styled.Text>Price</Styled.Text>
			</Styled.Chip>
			<Styled.Chip>
				<Styled.Text>Category</Styled.Text>
			</Styled.Chip>
		</Styled.Wrapper>
	);
};

export default Main;
