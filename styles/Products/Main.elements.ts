import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	-moz-flex-direction: column;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	align-items: center;
	grid-column: 2 / 3;
	grid-row: 2 / 4;
`;

export const Heading = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts.heading[4]};
	align-self: flex-start;
	font-weight: 300;
	margin: 3.5rem;
	margin-top: 0;
`;

export const List = styled.article`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	height: fit-content;
	overflow: scroll;
	& > article {
		margin: 3.5rem;
	}
`;
