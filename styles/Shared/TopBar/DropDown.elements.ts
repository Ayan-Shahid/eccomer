import styled from "styled-components";

export const Item = styled.button`
	display: flex;
	width: 100%;
	transition: 0.3s;
	padding: 1rem;
	user-select: none;
	align-items: center;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	border: none;
	background: none;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
	cursor: pointer;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.secondary[300]};
	}
	.icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[300]};
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
	.text {
		margin: 0;
		padding: 0;
		line-height: 1;
		margin-left: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[300]};
	}
`;

interface DropDownProps {
	active?: "true" | string;
}

export const Wrapper = styled.article<DropDownProps>`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	width: 15rem;
	transition: 0.3s ease-in;

	height: auto;
	opacity: ${({ active }) => (active === "true" ? "1" : "0")};
	position: absolute;
	overflow: hidden;
	top: 5rem;
	display: flex;
	flex-direction: column;
	right: 0;
	border-radius: ${({ theme: { fonts } }) => fonts["2xs"]};
	border: none;
`;
