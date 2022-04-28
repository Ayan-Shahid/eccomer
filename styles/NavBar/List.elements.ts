import styled from "styled-components";

export const Wrapper = styled.nav`
	height: 100%;
	width: 18rem;
	padding: 1.25rem;
	gap: 1.25rem;
	display: grid;
	flex-direction: column;
	justify-content: space-between;
	background: ${({ theme: { colors } }) => colors.dark[200]};
	font-size: ${({ theme: { fonts } }) => fonts.heading[1]};
	flex: none;
	list-style: none;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 1.25rem;
	justify-content: flex-start;
`;

export const DropDownList = styled(List)`
	margin-left: 1.1rem;

	&::before {
		content: "";
		width: 0.1rem;
		height: 100%;

		background: ${({ theme: { colors } }) => colors.dark[400]};
		border-radius: ${({ theme: { radius } }) => radius[1]};
		position: absolute;
	}
	& > li {
		margin-left: 1rem;
	}
`;
