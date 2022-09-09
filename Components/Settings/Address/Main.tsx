import React, { FunctionComponent } from "react";
import { MapPin } from "react-feather";
import * as Styled from "styles/Settings/Address/Main.elements";
import { Input } from "Components/Settings";

const Main: FunctionComponent = () => {
	return (
		<>
			<Styled.Heading>Billing Details</Styled.Heading>
			<Styled.Main>
				<Input
					value="24 Street Karachi Sindth Pakistan"
					label="Address"
					leftIcon={<MapPin className="left-icon" />}
				/>
				<Input
					value="24 Street Karachi Sindth Pakistan"
					label="Address"
					leftIcon={<MapPin className="left-icon" />}
				/>
			</Styled.Main>
		</>
	);
};

export default Main;
