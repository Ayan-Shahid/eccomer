import { useTimeout } from "Hooks/useTimeout";
import React, { FunctionComponent } from "react";
import { Check, X } from "react-feather";
import * as Styled from "styles/Shared/Toast/Main.elements";

interface ItemProps {
	close: () => void;
	text: string;
	type: "success" | "error" | "warning";
	title: string;
}

const Item: FunctionComponent<ItemProps> = ({
	close,
	text,
	type,
	title,
}: ItemProps) => {
	useTimeout(close, 5000);

	const icon = () => {
		if (type === "success") return <Check className="icon" />;
		else if (type === "error") return <X className="icon" />;
		else if (type === "warning") return <Styled.Text>!</Styled.Text>;
	};
	return (
		<Styled.Wrapper>
			<Styled.Progress className={type} />
			<Styled.Icon className={type}>{icon()}</Styled.Icon>
			<Styled.Column>
				<Styled.Title>{title}</Styled.Title>
				<Styled.Text>{text}</Styled.Text>
			</Styled.Column>
		</Styled.Wrapper>
	);
};

export default Item;
