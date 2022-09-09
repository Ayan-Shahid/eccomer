import React, {
	FunctionComponent,
	InputHTMLAttributes,
	ReactNode,
} from "react";
import * as Styled from "styles/Settings/Input/Main.elements";

interface MainProps extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: ReactNode;
	label?: string;
}

const Main: FunctionComponent<MainProps> = ({
	leftIcon,
	label,
	...props
}: MainProps) => {
	return (
		<Styled.FormControl>
			<Styled.Label>{label}</Styled.Label>
			<Styled.TextField>
				{leftIcon}
				<Styled.Input {...props} />
			</Styled.TextField>
		</Styled.FormControl>
	);
};

export default Main;
