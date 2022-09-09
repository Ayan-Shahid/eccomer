import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.article`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	display: flex;
	width: fit-content;
	padding: 1rem;
	border-radius: 0.4rem;
	align-items: center;
	justify-content: space-between;
`;

export const Figure = styled.figure`
	position: relative;
	width: 3rem;
	height: 2rem;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	margin: 0;
	border-radius: 0.2rem;
	margin-right: 1rem;
`;

export const Picture = styled(Image)``;

export const Number = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;
`;

export const ExpiryDate = styled(Number)`
	margin-left: 1rem;
`;

export const Row = styled.span`
	display: flex;
	flex-direction: column;
`;

export const Name = styled(Number)`
	font-size: ${({ theme: { fonts } }) => fonts.sm};
	color: ${({ theme: { colors } }) => colors.tertiary[100].concat("66")};
	font-weight: 500;
`;
