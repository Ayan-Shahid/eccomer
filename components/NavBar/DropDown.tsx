import React, { FunctionComponent } from "react";
import * as Styled from "styles/NavBar/DropDown.elements";
import Item from "./Item";
import Category from "icons/Light/Category.svg";
import ArrowDown from "icons/Light/Arrow - Down 4.svg";
import Shirt from "icons/Light/Shirt.svg";
import Game from "icons/Light/Game.svg";
import Star from "icons/Light/Star.svg";

import { useBoolean } from "hooks";

const DropDown: FunctionComponent = () => {
	const { toggle, value } = useBoolean();
	return (
		<Styled.Wrapper active={value?.toString()}>
			<Item
				onClick={toggle}
				icon={<Category />}
				text="Category"
				rightIcon={<ArrowDown className="drop-down-toggle-icon" />}
			/>
			<Styled.List active={value?.toString()}>
				<Item icon={<Shirt />} text="Clothing" />
				<Item icon={<Game />} text="Electronics" />
				<Item icon={<Star />} text="Accessories" />
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default DropDown;
