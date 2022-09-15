import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	flex: 0.5;
	align-items: center;
	position: relative;

	.search-icon {
		width: 1.2rem;
		height: 1.2rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
		position: absolute;
		left: 0.8rem;
	}
`;

export const Input = styled.input`
	padding: 0.7rem 2.5rem;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.base};
	border-radius: 0.5rem;
	flex: 1;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
	font-weight: 300;
	transition: 0.3s ease-in-out;
	border: 0.1rem solid transparent;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	outline: none;
	&:hover:not(:focus) {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		border-color: ${({ theme: { colors } }) => colors.secondary[300]};
	}
	&::placeholder {
		color: ${({ theme: { colors } }) => colors.tertiary[100].concat("66")};
	}
`;
