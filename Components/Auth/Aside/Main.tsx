import React, { FunctionComponent } from "react";
import * as Styled from "styles/Auth/Aside/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Picture
				layout="fill"
				priority
				alt="aside-picture"
				src="https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>
			<Styled.Wave />
		</Styled.Wrapper>
	);
};

export default Main;
