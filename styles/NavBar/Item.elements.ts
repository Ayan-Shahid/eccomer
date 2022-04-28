import styled from "styled-components";

export const Wrapper = styled.li`
	padding: 0.7rem;
	border-radius: ${({ theme: { radius } }) => radius[1]};
	background: ${({ theme: { colors } }) => colors.dark[200]};
	display: flex;
	flex: none;
	line-height: 0;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme: { fonts } }) => fonts.body[2]};
	cursor: pointer;
	user-select: none;
	transition: ease-in-out 0.3s;
	-webkit-transition: ease-in-out 0.3s;
	-moz-transition: ease-in-out 0.3s;
	color: ${({ theme: { colors } }) => colors.dark[400]};

	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[100]};
		color: ${({ theme: { colors } }) => colors.light[100]};
	}
`;

export const Row = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
	width: fit-content;
	& > svg {
		margin-right: 0.5rem;
	}
`;
