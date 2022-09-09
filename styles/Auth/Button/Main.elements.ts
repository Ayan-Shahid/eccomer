/* eslint-disable indent */
import styled, { keyframes } from "styled-components";

export const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);

	}
`;

export const Text = styled.p`
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.base};
	margin: 0;
	transition: 0.3s ease-in-out;
`;

export const Spinner = styled.span`
	background: transparent;
	border: 0.2rem solid
		${({ theme: { colors } }) => colors.tertiary[500].concat("22")};
	border-top: 0.2rem solid ${({ theme: { colors } }) => colors.tertiary[100]};
	border-radius: 50%;
	animation: 0.5s linear infinite ${spin};
	transition: 0.3s ease-in-out;
	width: 1rem;
	height: 1rem;
	flex: none;
	position: absolute;
`;

export const Button = styled.button`
	background: ${({ theme: { colors } }) => colors.secondary[300]};
	padding: 1rem;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	outline: 0.2rem solid transparent;
	font-weight: 700;
	${Text}.processing {
		transform: translateX(-100%);
		opacity: 0;
	}
	${Text}.default {
		opacity: 1;
		right: 50%;
	}
	.check-icon.verified,
	.cross-icon.error {
		opacity: 1;
		right: 50%;
	}
	.check-icon.default,
	.cross-icon.default {
		opacity: 0;
		right: 15%;
	}

	.check-icon,
	.cross-icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		position: absolute;
		transition: 0.3s ease-in-out;
	}

	${Spinner}.authenticating {
		right: 50%;
		opacity: 1;
	}
	${Spinner}.default {
		right: 15%;
		opacity: 0;
	}

	&:hover:not(:focus):not(:disabled) {
		background: ${({ theme: { colors } }) => colors.secondary[400]};
	}
	&:active:not(:disabled) {
		background: ${({ theme: { colors } }) => colors.secondary[200]};
	}
	&:focus:not(:active) {
		outline-color: ${({ theme: { colors } }) => colors.secondary[500]};
	}
	&:disabled {
		cursor: not-allowed;
		background: ${({ theme: { colors } }) => colors.tertiary[300].concat("66")};
		${Text} {
			color: ${({ theme: { colors } }) => colors.tertiary[300]};
		}
	}
`;
