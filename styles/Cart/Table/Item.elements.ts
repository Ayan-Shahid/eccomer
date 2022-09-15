import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.tr`
	display: flex;
	justify-content: space-between;
	padding: 0;
	margin: 2rem 0;
`;

export const Product = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
`;

export const Item = styled.td`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 0;
`;

export const Figure = styled.figure`
	margin: 0;
	position: relative;
	width: 2.5rem;
	height: 2.5rem;
	overflow: hidden;
	flex: none;
	margin-right: 0.7rem;
	border-radius: 0.3rem;
	@media screen and (max-width: 740px) {
		width: 2rem;
		height: 2rem;
	}
`;

export const Picture = styled(Image)`
	width: 100%;
	height: 100%;
`;

export const Caption = styled.figcaption`
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.p`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-weight: 700;
	user-select: none;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;
