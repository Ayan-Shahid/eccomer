import styled from "styled-components";

export const Wrapper = styled.section`
	padding: 2rem;
	padding-top: 0;
	overflow: hidden;
	display: flex;
	width: 100%;
	flex-direction: column;
	@media screen and (max-width: 740px) {
		overflow: scroll;
	}
`;

export const Heading = styled.h2`
	font-size: ${({ theme: { fonts } }) => fonts["2xl"]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 1.5rem 0;
	font-weight: 300;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.xl};
	}
`;

export const List = styled.article`
	display: grid;
	width: 100%;
	grid-auto-columns: minmax(12rem, auto);
	grid-auto-rows: minmax(15rem, auto);
	grid-template-columns: repeat(auto-fit, minmax(12rem, auto));
	grid-template-rows: repeat(auto-fit, minmax(15rem, auto));
	overflow: scroll;

	grid-gap: 2rem;

	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
	@media screen and (max-width: 740px) {
		grid-auto-columns: minmax(8.5rem, auto);
		grid-auto-rows: minmax(14rem, auto);
		grid-template-columns: repeat(auto-fit, minmax(8.5rem, auto));
		grid-template-rows: repeat(auto-fit, minmax(14rem, auto));
		margin-bottom: 4rem;
	}
`;
