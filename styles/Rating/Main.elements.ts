import styled from "styled-components";

interface IStar {
	active?: "true" | string;
}

export const Star = styled.span<IStar>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme: { fonts } }) => fonts.body[1]};
	color: ${({ theme: { colors }, active }) =>
		active === "true" ? colors.warning[100] : colors.dark[500]};
`;

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	-ms-flex-align: center;

	& > ${Star} {
		margin-left: 0.5rem;
	}
	${Star}:nth-child(1) {
		margin: 0;
	}
`;
