/* eslint-disable indent */
import styled from "styled-components";

export const ItemLabel = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.xs};
	color: ${({ theme: { colors } }) => colors.tertiary[400]};
	margin: 0;
	font-weight: 700;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts["2xs"]};
	}
`;

export const Wrapper = styled.nav`
	height: 100%;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	display: flex;
	width: 18rem;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	flex-direction: column;
	justify-content: space-between;
	padding: 0.3rem 0.7rem;
	@media screen and (max-width: 650px) {
		flex-direction: row;
		justify-content: center;
		background: ${({ theme: { colors } }) => colors.primary[200]};

		width: 100%;
		height: 3.6rem;
		padding: 0;
		position: fixed;
		bottom: 0;
		z-index: 10;
	}
`;

export const List = styled.ul`
	display: flex;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	flex-direction: column;
	@media screen and (max-width: 650px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

export const ItemText = styled.p`
	margin: 0;
	margin-left: 0.5rem;
	user-select: none;
	font-size: ${({ theme: { fonts } }) => fonts.base};

	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
	@media screen and (max-width: 650px) {
		display: none;
		margin-left: 0;
	}
`;

export const Item = styled.button`
	display: flex;
	width: 100%;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
	cursor: pointer;
	padding: 0.7rem;
	outline: none;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.base};
	background: none;
	align-items: center;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 650px) {
		margin: 0;
		width: fit-content;
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	.item-icon {
		width: 1.2rem;
		height: 1.2rem;
		line-height: 0;
		@media screen and (max-width: 740px) {
			height: 0.8rem;
			width: 0.8rem;
		}
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.tertiary[500]};
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
	}
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;

export const User = styled(Item)`
	@media screen and (max-width: 650px) {
		width: fit-content;
	}
	.sidebar-avatar {
		background: ${({ theme: { colors } }) => colors.primary[300]};
		@media screen and (max-width: 740px) {
			width: 1.8rem;
			height: 1.8rem;
		}
	}
	&:focus .sidebar-avatar {
		background: ${({ theme: { colors } }) => colors.tertiary[100].concat("0f")};
		& > span {
			border-color: ${({ theme: { colors } }) => colors.tertiary[500]};
		}
	}

	border-radius: 1rem;
	.user-aside {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		gap: 0.2rem;
		margin-left: 0.5rem;
	}

	${ItemText} {
		text-align: start;
		margin-left: 0;
		font-weight: 700;
	}
	${ItemLabel} {
		font-weight: 300;
		color: ${({ theme: { colors } }) => colors.tertiary[300].concat("66")};
		@media screen and (max-width: 650px) {
			display: none;
		}
	}
`;

export const LogoWrapper = styled.article`
	display: flex;
	position: relative;
	align-items: center;
	user-select: none;
	align-self: flex-start;
	margin: 0.5rem 0;
	margin-left: 0.5rem;
`;
export const LogoText = styled.p`
	margin-left: 1rem;
	line-height: 0;
	font-size: ${({ theme: { fonts } }) => fonts.xl};
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.lg};
	}
	@media screen and (max-width: 650px) {
		display: none;
	}
`;

export const Logo = styled.figure`
	width: 2.6rem;
	height: 2.6rem;
	margin: 0;
	position: relative;
	@media screen and (max-width: 740px) {
		width: 2rem;
		height: 2rem;
	}
	@media screen and (max-width: 650px) {
		display: none;
	}
`;
