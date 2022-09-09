import React, { FunctionComponent } from "react";
import * as Styled from "styles/Shared/TopBar/Input.elements";
import { Search } from "react-feather";

const Input: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Search className="search-icon" />
			<Styled.Input placeholder="Search for something..." />
		</Styled.Wrapper>
	);
};

export default Input;
