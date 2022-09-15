import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.figure`
	position: relative;
	flex: none;
	width: 50%;
	overflow: hidden;
	height: 100%;
	margin: 0;
	display: flex;
	background: ${({ theme: { colors } }) => colors.primary[500]};
	@media screen and (max-width: 650px) {
		display: none;
	}
`;

export const Picture = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Wave = styled.span`
	position: absolute;
	width: 50rem;
	top: -10rem;
	height: 150%;
	right: -46rem;
	transform: rotate(-10deg);
	background: ${({ theme: { colors } }) => colors.primary[500]};
`;
