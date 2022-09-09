import { auth } from "Database/config";
import { useRouter } from "next/router";
import React, { FunctionComponent, HTMLAttributes } from "react";
import { AlertCircle, Headphones, LogOut, Settings, User } from "react-feather";
import * as Styled from "styles/Shared/TopBar/DropDown.elements";

interface DropDownProps extends HTMLAttributes<HTMLElement> {
	active?: boolean;
}

const DropDown: FunctionComponent<DropDownProps> = ({
	active,
	...props
}: DropDownProps) => {
	const router = useRouter();
	const signOut = () => {
		auth.signOut().then(() => router.push("/"));
	};
	return (
		<Styled.Wrapper active={active?.toString()} {...props}>
			<Styled.Item>
				<Settings className="icon" />
				<p className="text">Setting</p>
			</Styled.Item>
			<Styled.Item>
				<User className="icon" />
				<p className="text">Account</p>
			</Styled.Item>
			<Styled.Item>
				<Headphones className="icon" />
				<p className="text">Help</p>
			</Styled.Item>
			<Styled.Item>
				<AlertCircle className="icon" />
				<p className="text">Terms and Conditions</p>
			</Styled.Item>
			<Styled.Item onClick={signOut}>
				<LogOut className="icon" />
				<p className="text">Sign Out</p>
			</Styled.Item>
		</Styled.Wrapper>
	);
};

export default DropDown;
