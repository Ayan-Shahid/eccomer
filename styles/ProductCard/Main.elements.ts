import styled from "styled-components";

export const Wrapper = styled.article`
	width: 10rem;
	height: fit-content;
	background: ${({ theme: { colors } }) => colors.dark[200]};
	border-radius: ${({ theme: { radius } }) => radius[1]};
	position: relative;
	display: flex;
	flex-direction: column;
	-ms-flex-direction: column;
	overflow: hidden;
	cursor: pointer;
	transition: 0.3s;
	-moz-transition: 0.3s;
	-webkit-transition: 0.3s;

	&:hover {
		transform: scale(1.1);
		-ms-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-webkit-transform: scale(1.1);
	}
`;

export const Image = styled.figure`
	height: 8.5rem;
	width: 100%;
	position: relative;
`;

export const Caption = styled.article`
	display: flex;
	flex-direction: column;
	-ms-flex-direction: column;
	padding: 1rem;
	article:nth-child(2) {
		margin-top: 0.5rem;
	}
`;

export const Row = styled.article`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
`;

export const Body = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.body[1]};
	font-weight: 700;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

export const Label = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.label[1]};
	font-weight: 300;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;
