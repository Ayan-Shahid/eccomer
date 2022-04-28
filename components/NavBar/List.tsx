import { FunctionComponent } from "react";
import * as Styled from "styles/NavBar/List.elements";
import Item from "./Item";
import Home from "icons/Light/Home.svg";
import Document from "icons/Light/Document.svg";
import Setting from "icons/Light/Setting.svg";
import DropDown from "./DropDown";

const List: FunctionComponent = () => {
	return (
		<Styled.List>
			<Item icon={<Home />} text="Home" />
			<Item icon={<Document />} text="Orders" />
			<DropDown />
			<Item icon={<Setting />} text="Settings" />
		</Styled.List>
	);
};

export default List;
