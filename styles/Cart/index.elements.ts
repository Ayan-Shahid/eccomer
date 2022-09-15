import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	@media screen and (max-width: 740px) {
		height: 100%;
	}
`;

export const Main = styled.main`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	margin-bottom: 2rem;
	position: relative;
	overflow: hidden;
	@media screen and (max-width: 740px) {
		flex-direction: column;
		margin: 2rem 0;
	}
`;

export const PaymentSuccess = styled.article`
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 2rem;
	transform: translate(-50%, -50%);
	background: ${({ theme: { colors } }) => colors.primary[400]};
	min-width: 30rem;
	height: 20rem;
	display: flex;
	align-items: center;
	transition: 0.3s ease-in-out;
	&.close {
		top: -100%;
		opacity: 0;
	}
	&.open {
		top: 50%;
		opacity: 1;
	}
	justify-content: center;
	flex-direction: column;
	border-radius: 0.8rem;
	z-index: 2;
	.closeIcon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		width: 2rem;
		cursor: pointer;
		height: 2rem;
		right: 1rem;
		top: 1rem;
		position: absolute;
		transition: 0.3s ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
		&:active {
			transform: scale(0.8);
		}
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.xl};
	font-weight: 700;
	text-align: center;
	width: 10rem;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.lg};
	}
`;
