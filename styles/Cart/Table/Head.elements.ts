import styled from "styled-components";

export const Text = styled.h6`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.lg};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-weight: 300;
	user-select: none;
`;

export const Item = styled.th`
	flex: 1;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.tr`
	display: flex;
	justify-content: space-between;
	padding: 0;
`;
