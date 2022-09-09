import React, { FunctionComponent, useState } from "react";
import * as Styled from "styles/Settings/Main/Main.elements";
import { SideTabs, Account, Address, PaymentMethods } from "..";

const Main: FunctionComponent = () => {
	const [settingTab, setSettingTab] = useState<
		"Account" | "Address" | "Payments" | string
	>("Account");

	const showSettingTab = () => {
		if (settingTab === "Account") return <Account />;
		else if (settingTab === "Address") return <Address />;
		else if (settingTab === "Payments") return <PaymentMethods />;
	};
	return (
		<Styled.Wrapper>
			<SideTabs setSettingsTab={setSettingTab} />
			<Styled.Aside>{showSettingTab()}</Styled.Aside>
		</Styled.Wrapper>
	);
};

export default Main;
