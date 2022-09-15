import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	@media screen and (max-width: 740px) {
		height: 100%;
	}
`;

export const Main = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
`;
