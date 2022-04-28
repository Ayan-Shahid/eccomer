/* eslint-disable indent */
import styled from "styled-components";
import { List as NavList } from "./List.elements";

interface Wrapper {
	active?: "true" | "false" | string;
}

export const Wrapper = styled.li<Wrapper>`
	overflow: hidden;
	display: flex;
	flex-direction: column;

	.drop-down-toggle-icon {
		transition: 0.3s;
		-webkit-transition: ease-in-out 0.3s;
		-moz-transition: ease-in-out 0.3s;
		transform: ${({ active }) =>
			active === "true" ? "rotate(180deg)" : "rotate(0)"};
	}
`;

export const List = styled(NavList)<Wrapper>`
	margin-left: 1.1rem;
	margin-top: ${({ active }) => (active === "true" ? "1.25rem" : "0")};
	overflow: hidden;
	transition: 0.3s;
	-webkit-transition: ease-in-out 0.3s;
	-moz-transition: ease-in-out 0.3s;

	height: ${({ active }) => (active === "true" ? "100%" : "0")};
	&::before {
		content: "";
		width: 0.1rem;
		height: 100%;

		background: ${({ theme: { colors } }) => colors.dark[400]};
		border-radius: ${({ theme: { radius } }) => radius[1]};
		position: absolute;
	}
	& > li {
		margin-left: 1rem;
	}
`;
