import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import * as Styled from "styles/Shared/Toast/Main.elements";
import Item from "./Item";

interface MainProps {
	toasts: {
		id: string;
		content: {
			type: "success" | "warning" | "error";
			title: string;
			text: string;
		};
	}[];
	setToasts: Dispatch<
		SetStateAction<
			{
				id: string;
				content: {
					type: "success" | "warning" | "error";
					title: string;
					text: string;
				};
			}[]
		>
	>;
}

const Main: FunctionComponent<MainProps> = ({
	toasts,
	setToasts,
}: MainProps) => {
	const close = (id: string) =>
		setToasts((currentToasts) =>
			currentToasts.filter((toast) => toast.id !== id)
		);
	return (
		<Styled.List>
			{toasts.map((toast) => {
				return (
					<Item
						close={() => close(toast.id)}
						{...toast.content}
						key={toast.id}
					/>
				);
			})}
		</Styled.List>
	);
};

export default Main;
