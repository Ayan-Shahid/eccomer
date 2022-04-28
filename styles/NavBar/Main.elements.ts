import styled from "styled-components";

export const Wrapper = styled.nav`
	height: 100%;
	width: 18rem;
	padding: 1.25rem;
	display: grid;
	flex-direction: column;
	justify-content: space-between;
	background: ${({ theme: { colors } }) => colors.dark[200]};
	font-size: ${({ theme: { fonts } }) => fonts.heading[1]};
	flex: none;
	list-style: none;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;

	& > ul {
		margin-top: 1.25rem;
	}
`;
