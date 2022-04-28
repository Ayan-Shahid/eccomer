import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import * as Styled from "styles/NavBar/Item.elements";

interface IItem extends HTMLAttributes<HTMLLIElement> {
	icon?: ReactNode;
	rightIcon?: ReactNode;
	text?: string;
}

const Item: FunctionComponent<IItem> = ({
	icon,
	text,
	rightIcon,
	...props
}: IItem) => {
	return (
		<Styled.Wrapper {...props}>
			<Styled.Row>
				{icon}
				<p>{text}</p>
			</Styled.Row>
			{rightIcon}
		</Styled.Wrapper>
	);
};

export default Item;
