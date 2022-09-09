import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Heading = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts.xl};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;
	margin-bottom: 1rem;
`;
