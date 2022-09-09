import styled from "styled-components";

export const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Label = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.md};
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-weight: 300;
	margin-bottom: 0.5rem;
`;

export const TextField = styled.article`
	display: flex;
	align-items: center;
	width: 100%;
	.left-icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		position: absolute;
		margin: 0 1rem;
	}
`;

export const Input = styled.input`
	outline: 0.1rem solid transparent;
	padding: 1rem;
	padding-left: 3rem;
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border-radius: 0.5rem;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	font-weight: 300;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	transition: 0.3s ease-in-out;
	&::placeholder {
		color: ${({ theme: { colors } }) => colors.tertiary[100].concat("4a")};
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:focus {
		outline-color: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&:read-only {
	}
`;
