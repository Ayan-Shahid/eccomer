import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
`;

export const Main = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	overflow: auto;
	scrollbar-width: none;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		display: none;
	}
`;
