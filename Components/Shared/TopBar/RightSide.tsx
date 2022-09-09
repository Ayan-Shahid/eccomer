/* eslint-disable no-mixed-spaces-and-tabs */
import { Context } from "Context/Provider";
import { auth } from "Database/config";
import { useBoolean } from "Hooks";
import Link from "next/link";
import React, { FunctionComponent, useContext } from "react";
import { ShoppingCart } from "react-feather";
import * as Styled from "styles/Shared/TopBar/RightSide.elements";
import { Avatar, CurrencySelector } from "..";
import DropDown from "./DropDown";

interface RightSideProps {
	currenciesList?:
		| {
				currencies: {
					[key: string]: { name: string };
				};
				flags: { png: string };
		  }[]
		| null;
}

const RightSide: FunctionComponent<RightSideProps> = ({
	currenciesList,
}: RightSideProps) => {
	const { state } = useContext(Context);
	const {
		setTrue: openDropDown,
		setFalse: closeDropDown,
		state: dropDownActive,
	} = useBoolean();
	return (
		<Styled.Wrapper>
			<CurrencySelector countriesList={currenciesList || null} />
			<Link href="cart">
				<Styled.Cart>
					<ShoppingCart className="cart-icon" />
					<Styled.CartCounter>{state?.cart?.length}</Styled.CartCounter>
				</Styled.Cart>
			</Link>
			<Avatar
				onMouseEnter={openDropDown}
				className="topbar-avatar"
				size="2.5rem"
				photoUrl={auth.currentUser?.photoURL}
			/>
			<DropDown
				className="drop-down"
				active={dropDownActive}
				onMouseLeave={closeDropDown}
			/>
		</Styled.Wrapper>
	);
};

export default RightSide;
