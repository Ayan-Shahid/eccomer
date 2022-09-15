import styled from "styled-components";

export const Error = styled.span`
	background: none;
	margin: 0;
	margin-top: 0.6rem;
	height: fit-content;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
	border-radius: 0.5rem;
	transition: 0.3s ease-in-out;
`;
export const ErrorText = styled.p`
	font-weight: 700;
	color: ${({ theme: { colors } }) => colors.error[300]};
	font-size: ${({ theme: { fonts } }) => fonts.base};
	margin: 0;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;

export const Input = styled.input`
	padding: 1rem;
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border-radius: 0.3rem;
	caret-color: ${({ theme: { colors } }) => colors.tertiary[100]};
	outline: 0.1rem solid transparent;
	transition: 0.3s ease-in-out;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	padding-left: 3rem;
	font-weight: 300;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}

	&:invalid ~ .valid-icon {
		color: ${({ theme: { colors } }) => colors.success[100]};
		opacity: 0;
	}

	&:valid ~ .valid-icon {
		color: ${({ theme: { colors } }) => colors.success[100]};

		opacity: 1;
	}
	&:valid {
		outline-color: ${({ theme: { colors } }) => colors.success[100]};

		color: ${({ theme: { colors } }) => colors.success[100]};
	}
	&:valid ~ .left-icon {
		color: ${({ theme: { colors } }) => colors.success[100]};
	}
	&:invalid {
		outline-color: ${({ theme: { colors } }) => colors.error[300]};
		color: ${({ theme: { colors } }) => colors.error[300]};
	}
	&:invalid ~ .left-icon {
		color: ${({ theme: { colors } }) => colors.error[300]};
	}
	&:placeholder-shown {
		outline: 0.1rem solid transparent;

		color: ${({ theme: { colors } }) => colors.tertiary[500]};
	}
	&:placeholder-shown ~ .left-icon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
	}
	&::placeholder {
		color: ${({ theme: { colors } }) => colors.tertiary[300].concat("44")};
	}
	&:hover:not(:focus) {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:placeholder-shown:focus {
		outline-color: ${({ theme: { colors } }) => colors.primary[100]};
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	.error-icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.error[300]};
		transition: 0.3s ease-in-out;
		margin-right: 1rem;
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
	.error-active {
		display: flex;
	}
	.error-unactive {
		display: none;
	}
`;

export const InputWrapper = styled.article`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;
	.left-icon,
	.right-icon,
	.valid-icon {
		position: absolute;
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		margin: 0 1rem;
		transition: 0.3s ease-in-out;
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}

	.right-icon,
	.valid-icon {
		right: 0;
	}
	.right-icon {
		cursor: pointer;
		&:hover {
			transform: scale(1.2);
		}
		&:active {
			transform: scale(1);
		}
	}
`;
