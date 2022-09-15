import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	& > .topbar-avatar {
		margin-left: 1rem;
		margin-right: 0.5rem;
		background: ${({ theme: { colors } }) => colors.primary[100]};
		cursor: pointer;
		@media screen and (max-width: 740px) {
			width: 1.8rem;
			height: 1.8rem;
		}
		@media screen and (max-width: 500px) {
			display: none;
		}
	}
	.drop-down {
		right: 0.7rem;
	}
`;

export const Cart = styled.button`
	display: flex;
	border: none;
	outline: none;
	background: none;

	position: relative;
	cursor: pointer;
	align-items: center;

	justify-content: center;
	transition: 0.3s;
	padding: 0.7rem;
	border-radius: 50%;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};

	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}

	.cart-icon {
		width: 1.4rem;
		height: 1.4rem;
	}
	@media screen and (max-width: 740px) {
		.cart-icon {
			width: 1.2rem;
			height: 1.2rem;
		}
	}
`;
export const CartCounter = styled.span`
	border-radius: 50%;
	display: flex;
	right: 0rem;
	top: 0rem;
	width: 1rem;
	height: 1rem;
	@media screen and (max-width: 740px) {
		width: 0.8rem;
		height: 0.8rem;
	}
	position: absolute;
	align-items: center;

	justify-content: center;
	background: ${({ theme: { colors } }) => colors.tertiary[500]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-weight: 300;
	line-height: 0;
	font-size: ${({ theme: { fonts } }) => fonts.xs};
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts["2xs"]};
	}
`;
