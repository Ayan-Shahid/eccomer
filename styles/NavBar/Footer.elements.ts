import styled from "styled-components";

export const Aside = styled.aside`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	padding: 0 0.7rem;
	background: none;
	flex: none;
	transition: ease-in-out 0.3s;
	-webkit-transition: ease-in-out 0.3s;
	-moz-transition: ease-in-out 0.3s;

	cursor: pointer;
	border-radius: ${({ theme: { radius } }) => radius[1]};

	&:hover {
		background: ${({ theme: { colors } }) => colors.dark[100]};
	}
	& > ${Aside} {
		margin-left: 0.7rem;
	}
`;

export const Body = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.body[2]};
`;

export const Label = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.label[2]};
	color: ${({ theme: { colors } }) => colors.dark[500]};
	font-weight: 700;
`;
