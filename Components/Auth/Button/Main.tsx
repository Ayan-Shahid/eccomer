/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ButtonHTMLAttributes, FunctionComponent } from "react";
import { CheckCircle, XCircle } from "react-feather";
import * as Styled from "styles/Auth/Button/Main.elements";

interface MainProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	state?: "default" | "authenticating" | "successfull" | "error";
	text?: string;
}

const Main: FunctionComponent<MainProps> = ({
	state,
	text,
	...props
}: MainProps) => {
	// const testRun = () => {
	// 	setButtonState("authenticating");
	// 	setTimeout(() => setButtonState("successfull"), 1000);
	// 	setTimeout(() => setButtonState("default"), 2000);
	// };
	return (
		<Styled.Button {...props} className="form-button">
			<Styled.Text
				className={`${state === "default" ? "default" : "processing"}`}
			>
				{text}
			</Styled.Text>
			<Styled.Spinner
				className={`${
					state === "authenticating" ? "authenticating" : "default"
				}`}
			/>
			<CheckCircle
				className={`check-icon ${
					state === "successfull" ? "verified" : "default"
				}`}
			/>
			<XCircle
				className={`cross-icon ${state === "error" ? "error" : "default"}`}
			/>
		</Styled.Button>
	);
};

export default Main;
