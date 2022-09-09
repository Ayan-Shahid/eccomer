import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	display: flex;
	padding: 0.6rem;
	align-items: center;
	justify-content: space-evenly;
`;

export const Chip = styled.button`
	background: ${({ theme: { colors } }) => colors.primary[200]};
	padding: 0.8rem 1rem;
	outline: none;
	border-radius: 1rem;
	transition: 0.3s ease-in-out;
	margin-right: 1rem;
	cursor: pointer;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.secondary[300]};
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.sm};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	user-select: none;
`;
