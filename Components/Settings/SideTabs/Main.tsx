import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Bell, DollarSign, MapPin, Shield, User } from "react-feather";
import * as Styled from "styles/Settings/SideTabs/Main.elements";
import { v1 as uuidv1 } from "uuid";

const settingsTabs = [
	{ name: "Account", icon: <User className="item-icon" />, key: uuidv1() },
	{ name: "Security", icon: <Shield className="item-icon" />, key: uuidv1() },
	{ name: "Address", icon: <MapPin className="item-icon" />, key: uuidv1() },
	{
		name: "Payments",
		icon: <DollarSign className="item-icon" />,
		key: uuidv1(),
	},
	{
		name: "Notifications",
		icon: <Bell className="item-icon" />,
		key: uuidv1(),
	},
];

interface MainProps {
	setSettingsTab?: Dispatch<
		SetStateAction<"Account" | "Address" | "Payments" | string>
	> | null;
}

const Main: FunctionComponent<MainProps> = ({ setSettingsTab }: MainProps) => {
	const setSettings = (name: string) => {
		if (setSettingsTab) setSettingsTab(name);
	};
	return (
		<Styled.Wrapper>
			{settingsTabs.map(({ name, icon, key }) => (
				<Styled.Item onClick={() => setSettings(name)} key={key}>
					{icon}
					<Styled.Text>{name}</Styled.Text>
				</Styled.Item>
			))}
		</Styled.Wrapper>
	);
};

export default Main;
