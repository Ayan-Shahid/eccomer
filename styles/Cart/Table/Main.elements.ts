import styled from "styled-components";

export const Wrapper = styled.section`
	height: 100%;
	padding: 0 2rem;
	position: relative;
	width: 100%;
	overflow: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Table = styled.table`
	border-collapse: collapse;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border-radius: 0.5rem;
	width: 100%;
`;
