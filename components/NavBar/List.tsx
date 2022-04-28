import { FunctionComponent } from "react";
import * as Styled from "styles/NavBar/List.elements";
import Item from "./Item";
import Home from "icons/Light/Home.svg";
import Document from "icons/Light/Document.svg";
import Category from "icons/Light/Category.svg";
import Setting from "icons/Light/Setting.svg";
import Shirt from "icons/Light/Shirt.svg";
import Game from "icons/Light/Game.svg";
import Footer from "./Footer";
import Logo from "logo/Logo.svg";

const List: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Logo />
			<Styled.List>
				<Item icon={<Home />} text="Home" />
				<Item icon={<Document />} text="Orders" />
				<Item icon={<Category />} text="Categories" />
				<Styled.DropDownList>
					<Item icon={<Shirt />} text="Clothing" />
					<Item icon={<Game />} text="Electronics" />
					<Item icon={<Game />} text="Accessories" />
				</Styled.DropDownList>
				<Item icon={<Setting />} text="Settings" />
			</Styled.List>
			<Footer />
		</Styled.Wrapper>
	);
};

export default List;
