import { Avatar } from "components";
import { FunctionComponent } from "react";
import * as Styled from "styles/NavBar/Footer.elements";

const Footer: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Avatar size="35" />
			<Styled.Aside>
				<Styled.Body>Ayan Shahid</Styled.Body>
				<Styled.Label>ayanshahid255@gmail.com</Styled.Label>
			</Styled.Aside>
		</Styled.Wrapper>
	);
};

export default Footer;
