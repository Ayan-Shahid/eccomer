import React, { FunctionComponent } from "react";
import Search from "icons/Light/Search.svg";
import * as Styled from "styles/TopBar/Input.elements";

const Input: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Search className="topbar-input-search-icon" />
			<Styled.Input placeholder="Search..." />
		</Styled.Wrapper>
	);
};

export default Input;
