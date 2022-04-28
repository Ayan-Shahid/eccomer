import styled from "styled-components";

export const Wrapper = styled.header`
	width: 100%;
	display: flex;
	height: fit-content;
	justify-content: space-between;
	align-items: center;
`;

export const Icon = styled.article`
	display: flex;
	align-items: center;
	position: relative;
	flex: none;
	transition: 0.3s;
	-moz-transition: 0.3s;
	-webkit-transition: 0.3s;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
`;

export const Aside = styled.aside`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme: { fonts } }) => fonts.heading[4]};

	& > ${Icon} {
		margin-left: 1.25rem;
	}
`;

export const Badge = styled.span`
	display: flex;
	align-items: center;
	height: 2em;
	width: 2em;
	line-height: 0;
	flex: none;
	border-radius: ${({ theme: { radius } }) => radius[2]};
	position: absolute;
	right: -0.5rem;
	top: -1rem;
	text-align: center;
	justify-content: center;
	background: ${({ theme: { colors } }) => colors.light[100]};
	color: ${({ theme: { colors } }) => colors.dark[100]};
	font-size: 10px;
	font-weight: 700;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;
