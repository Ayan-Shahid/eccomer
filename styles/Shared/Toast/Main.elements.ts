import styled, { keyframes } from "styled-components";

export const Wrapper = styled.article`
	background: ${({ theme: { colors } }) => colors.primary[200]};

	border-radius: 0.6rem 0.6rem 0 0;
	min-width: 30rem;
	margin-top: 1.4rem;
	overflow: hidden;
	position: relative;
	display: flex;
	transition: 0.3s ease-in-out;
	align-items: center;

	.success-icon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		fill: ${({ theme: { colors } }) => colors.success[100]};
	}
`;

const decrease = keyframes`
	0% {
		width: 100%;
	}
	100% {
		width: 0;
	}
`;

export const Progress = styled.span`
	width: 100%;
	height: 0.2rem;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	position: absolute;
	bottom: 0;
	&::before {
		content: "";
		border-radius: 1rem;
		position: absolute;
		height: 100%;
		bottom: 0;
		animation: 5s linear infinite ${decrease};
		width: 100%;
	}
	&.success::before {
		background: ${({ theme: { colors } }) => colors.success[300]};
	}
	&.error::before {
		background: ${({ theme: { colors } }) => colors.error[300]};
	}
	&.warning::before {
		background: ${({ theme: { colors } }) => colors.warning[300]};
	}
`;

export const Title = styled.h6`
	font-size: ${({ theme: { fonts } }) => fonts.lg};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	margin-top: 0.2rem;
	font-weight: 300;
`;

export const Icon = styled.span`
	width: 1.5rem;
	height: 1.5rem;
	margin: 0;
	&.success {
		background: ${({ theme: { colors } }) => colors.success[300]};
	}
	&.error {
		background: ${({ theme: { colors } }) => colors.error[300]};
	}
	&.warning {
		background: ${({ theme: { colors } }) => colors.warning[300]};
	}
	.icon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		width: 0.8rem;
		height: 0.8rem;
	}
	margin-left: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;

export const Column = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1.5rem;
`;

export const List = styled.div`
	display: flex;
	width: fit-content;
	margin: 4rem;
	position: absolute;
	z-index: 5;
	flex-direction: column;
	height: fit-content;
	left: 50%;
	transform: translateX(-50%);
	top: 0;
`;
