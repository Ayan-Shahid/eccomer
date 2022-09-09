import { Avatar } from "Illustrations";
import React, { FunctionComponent, HTMLAttributes } from "react";
import * as Styled from "styles/Shared/Avatar/Main.elements";

interface MainProps extends HTMLAttributes<HTMLElement> {
	size?: string;
	photoUrl?: string | null;
}

const Main: FunctionComponent<MainProps> = ({
	size,
	photoUrl,
	...props
}: MainProps) => {
	return (
		<Styled.Wrapper {...props} size={size}>
			{photoUrl ? (
				<Styled.Photo alt="avatar" src={photoUrl} layout="fill" />
			) : (
				<Avatar />
			)}
			<Styled.Badge />
		</Styled.Wrapper>
	);
};

export default Main;
