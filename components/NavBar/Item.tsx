import { FunctionComponent, ReactNode } from "react";
import * as Styled from "styles/NavBar/Item.elements";

interface IItem {
	icon?: ReactNode;
	text?: string;
}

const Item: FunctionComponent<IItem> = ({ icon, text }: IItem) => {
	return (
		<Styled.Wrapper>
			{icon}
			<p>{text}</p>
		</Styled.Wrapper>
	);
};

export default Item;
