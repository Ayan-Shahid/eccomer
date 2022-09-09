import styled from "styled-components";
export const Heading = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts.xl};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;
`;

export const Main = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
`;
