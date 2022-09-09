import styled from "styled-components";

export const Wrapper = styled.form`
	&.close {
		opacity: 0;
		top: -50%;
	}
	position: absolute;
	display: flex;
	flex-direction: column;
	.form-button {
		width: 100%;
	}
	padding: 1.4rem;
	width: 30rem;
	border-radius: 0.4rem;
	transition: 0.3s ease-in-out;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	gap: 1.4rem;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	.input {
		&:hover {
			background: ${({ theme: { colors } }) => colors.primary[500]};
		}
	}

	/* border: 0.1rem solid ${({ theme: { colors } }) => colors.primary[100]}; */
`;

export const Row = styled.span`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const Title = styled.h6`
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.lg};
`;

export const Cancel = styled.button`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border: none;
	display: flex;
	margin-right: 1.4rem;
	align-items: center;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	border-radius: 0.4rem;
	width: 100%;
	transition: 0.3s ease-in-out;
	outline: 0.1rem solid transparent;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		outline-color: ${({ theme: { colors } }) => colors.primary[100]};
	}
	cursor: pointer;
	justify-content: center;
	padding: 1rem;
	.cancel-icon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		width: 1rem;
		height: 1rem;
		margin-right: 0.6rem;
	}
`;
