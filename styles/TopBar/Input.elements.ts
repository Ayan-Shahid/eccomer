import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	flex: 0.5;
	align-items: center;
	padding: 1rem;
	.topbar-input-search-icon {
		position: absolute;
		margin: 0 0.7rem;
	}
`;

export const Input = styled.input`
	background: ${({ theme: { colors } }) => colors.dark[200]};
	border: 0.1rem solid ${({ theme: { colors } }) => colors.dark[300]};
	border-radius: ${({ theme: { radius } }) => radius[1]};
	padding: 0.7rem 2.3rem;
	flex: 1;
	color: ${({ theme: { colors } }) => colors.light[100]};
	outline-width: 0.2rem;
	outline-color: transparent;
	outline-style: solid;
	transition: 0.3s;
	-moz-transition: 0.3s;
	-webkit-transition: 0.3s;
	&:hover {
		background: ${({ theme: { colors } }) => colors.dark[300]};
		border: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	}
	&:focus {
		outline-color: ${({ theme: { colors } }) => colors.light[500].concat("55")};
		border: 0.1rem solid ${({ theme: { colors } }) => colors.light[500]};
	}
`;
