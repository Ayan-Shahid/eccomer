import styled from "styled-components";

export const Wrapper = styled.figure`
	position: relative;
	width: fit-content;
	height: fit-content;
	flex: none;
	border-radius: ${({ theme: { radius } }) => radius[2]};
`;

export const Indicator = styled.span`
	position: absolute;
	width: 0.7rem;
	height: 0.7rem;
	flex: none;

	right: 0;
	top: 20%;
	border-radius: ${({ theme: { radius } }) => radius[2]};
	background: ${({ theme: { colors } }) => colors.success[100]};
`;
