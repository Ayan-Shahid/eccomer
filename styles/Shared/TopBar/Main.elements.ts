import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	flex: none;
	height: fit-content;
	padding: 0.5rem 0.5rem;
	justify-content: space-between;
	z-index: 2;
	display: flex;
	align-items: center;
`;
