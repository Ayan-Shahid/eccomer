import styled from "styled-components";

export const Wrapper = styled.header`
	width: 100%;
	padding: 1rem;
	display: flex;
	align-items: center;
`;

export const Button = styled.button`
	background: none;
	cursor: pointer;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	padding: 0.7rem;
	border-radius: 40%;
	transition: 0.3s ease-in-out;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	.return-icon {
		width: 2rem;
		height: 2rem;
	}
`;

export const Heading = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts["2xl"]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	user-select: none;
	margin-left: 1rem;
`;
