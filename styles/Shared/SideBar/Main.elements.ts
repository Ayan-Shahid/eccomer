/* eslint-disable indent */
import Image from "next/image";
import styled from "styled-components";

export const ItemLabel = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.xs};
	color: ${({ theme: { colors } }) => colors.tertiary[400]};
	margin: 0;
	font-weight: 700;
`;

export const Wrapper = styled.nav`
	height: 100%;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	display: flex;
	width: 18rem;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	padding: 0;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.3rem 0.7rem;
`;

export const List = styled.ul`
	display: flex;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	flex-direction: column;
`;

export const ItemText = styled.p`
	margin: 0;
	margin-left: 0.5rem;
	user-select: none;
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
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	.item-icon {
		width: 1.2rem;
		height: 1.2rem;
		line-height: 0;
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.tertiary[500]};
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
	}
`;

export const User = styled(Item)`
	.sidebar-avatar {
		background: ${({ theme: { colors } }) => colors.primary[300]};
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
`;

export const Logo = styled(Image)``;
