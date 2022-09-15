import Image from "next/image";
import styled from "styled-components";

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.md};
	font-weight: 700;
	margin: 0;
	text-align: start;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.base};
	}
`;

export const Caption = styled.figcaption`
	margin: 0;
	width: 100%;
	display: flex;
	height: fit-content;
	flex-direction: column;
	transition: 0.3s ease-in-out;
	justify-content: flex-end;
	padding: 0.7rem;
`;

export const Figure = styled.figure`
	position: relative;
	width: 100%;
	margin: 0;
	height: 50%;
	background: ${({ theme: { colors } }) => colors.primary[300]};
`;

export const Picture = styled(Image)`
	object-fit: cover;

	width: 100%;
	height: 100%;
`;
export const Label = styled(Text)`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	font-weight: 300;
	word-break: break-all;
	margin-top: 0.5rem;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;

export const Wrapper = styled.article`
	flex: none;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border-radius: 0.7rem;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	cursor: pointer;
	position: relative;
	overflow: hidden;
	display: flex;

	flex-direction: column;
`;

export const Button = styled.button`
	display: flex;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	cursor: pointer;
	border-radius: 0.4rem;
	background: ${({ theme: { colors } }) => colors.secondary[300]};
	align-items: center;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	transition: 0.3s ease-in-out;
	padding: 0.8rem;
	justify-content: center;
	.button-icon {
		width: 1rem;
		height: 1rem;
		transition: 0.3s ease-in-out;
		margin-right: 0.5rem;
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
	& > ${Label} {
		font-weight: 500;
		margin: 0;
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.secondary[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.secondary[200]};
	}
`;

export const Rating = styled.article`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;
	margin-bottom: 1rem;
	.rating-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.3rem;
	}
	.rating-icon:nth-child(1),
	.rating-icon:nth-child(2) {
		fill: ${({ theme: { colors } }) => colors.warning[300]};
		stroke: ${({ theme: { colors } }) => colors.warning[300]};
	}
	@media screen and (max-width: 740px) {
		.rating-icon {
			width: 0.6rem;
			height: 0.6rem;
		}
	}
`;
