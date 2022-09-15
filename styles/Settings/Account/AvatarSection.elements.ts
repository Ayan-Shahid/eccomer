import Image from "next/image";
import styled from "styled-components";
export const Wrapper = styled.section``;

export const Label = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.md};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-weight: 300;
	width: 100%;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.base};
	}
`;

export const Row = styled.article`
	display: flex;
	align-items: center;
`;

export const Figure = styled.figure`
	width: 4rem;
	height: 4rem;
	position: relative;
	margin: 0;
	border-radius: 50%;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	.fileInput {
		display: none;
	}
`;

export const Photo = styled(Image)`
	border-radius: 50%;
`;

export const Badge = styled.span`
	width: 40%;
	height: 40%;
	border-radius: 50%;
	top: -0.2rem;
	right: -0.2rem;
	background: ${({ theme: { colors } }) => colors.secondary[500]};
	border: 0.2rem solid ${({ theme: { colors } }) => colors.primary[500]};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	.avatar-badge-icon {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		width: 0.6rem;
		height: 0.6rem;
	}
`;

export const Button = styled.button`
	background: ${({ theme: { colors } }) => colors.error[300]};
	border-radius: 0.4rem;
	transition: 0.3s ease-in-out;
	padding: 1rem;
	display: flex;
	margin-left: 1rem;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: 0.15rem solid transparent;
	.icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.error[400]};
	}

	&:focus {
		outline: 0.15rem solid ${({ theme: { colors } }) => colors.error[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.error[200]};
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	line-height: 0;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;
