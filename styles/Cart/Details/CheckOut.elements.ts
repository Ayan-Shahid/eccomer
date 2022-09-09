import styled, { keyframes } from "styled-components";

export const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);

	}
`;

export const Spinner = styled.span`
	background: transparent;
	border: 0.2rem solid
		${({ theme: { colors } }) => colors.tertiary[100].concat("44")};

	border-top: 0.2rem solid ${({ theme: { colors } }) => colors.tertiary[100]};
	border-radius: 50%;
	animation: 0.5s linear infinite ${spin};
	transition: 0.3s ease-in-out;
	width: 1rem;
	right: 50%;
	height: 1rem;
	flex: none;
	position: absolute;
	&.default,
	&.success,
	&.failed {
		right: 20%;
		opacity: 0;
	}
`;

export const Wrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.md};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;

	user-select: none;
`;

export const StripeInput = styled.button`
	margin-top: 1.5rem;
	outline: none;
	transition: 0.3s ease-in-out;
	border: 0.1rem solid;
	border-color: transparent;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		border-color: ${({ theme: { colors } }) => colors.secondary[200]};
	}
	border-radius: 0.6rem;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	.stripeCvcElement {
		width: 100%;
		padding: 1rem;
	}
`;

export const Button = styled.button`
	outline: none;
	background: ${({ theme: { colors } }) => colors.secondary[300]};
	flex: none;
	margin-top: 1.5rem;
	display: flex;
	height: fit-content;
	padding: 1.5rem;
	border-radius: 0.5rem;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	position: relative;
	align-items: center;
	justify-content: center;
	.checkout-icon,
	.success,
	.failed {
		width: 1rem;
		margin-right: 1rem;
		position: absolute;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		transition: 0.3s ease-in-out;
		stroke: ${({ theme: { colors } }) => colors.tertiary[100]};
		fill: transparent;
	}
	.checkout-icon {
		right: 60%;
	}
	.checkout-icon.processing,
	.checkout-icon.success,
	.checkout-icon.failed {
		right: 20%;
		opacity: 0;
	}
	.success,
	.failed {
		margin-right: 0;
		position: absolute;
		right: 50%;
	}
	.success.default,
	.success.processing,
	.success.failed,
	.failed.default,
	.failed.processing,
	.failed.success {
		right: 20%;
		opacity: 0;
	}
	& > ${Text} {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		font-size: ${({ theme: { fonts } }) => fonts.base};
		line-height: 0;
		transition: 0.3s ease-in-out;
		&.processing,
		&.success,
		&.failed {
			transform: translateX(100%);
			opacity: 0;
		}
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.secondary[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.secondary[200]};
	}
	&:disabled {
		background: ${({ theme: { colors } }) => colors.tertiary[100].concat("44")};
		cursor: not-allowed;
	}
`;
