import { FunctionComponent } from "react";
import List from "./List";
import Footer from "./Footer";
import Logo from "logo/Logo.svg";
import * as Styled from "styles/NavBar/Main.elements";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Logo />
			<List />
			<Footer />
		</Styled.Wrapper>
	);
};

export default Main;
