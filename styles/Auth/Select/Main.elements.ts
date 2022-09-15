import styled from "styled-components";

export const List = styled.article`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	padding: 0;
	margin-top: 2rem;
	border-radius: 0.3rem;
	width: 100%;
	top: 4rem;
	z-index: 5;
	transition: 0.3s ease-in-out;
	overflow: scroll;
	position: absolute;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Wrapper = styled.div`
	width: 100%;

	position: relative;
	${List}.active {
		opacity: 1;
		height: 9.2rem;
	}
	${List}.closed {
		opacity: 0;
		height: 0;
	}
	${List}.nodata {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Selected = styled.button`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	padding: 1rem;
	margin-top: 2rem;
	border-radius: 0.3rem;
	cursor: pointer;

	width: 100%;
	display: flex;
	align-items: center;
	transition: 0.3s ease-in-out;
	justify-content: space-between;
	outline: 0.1rem solid transparent;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:focus {
		outline-color: ${({ theme: { colors } }) => colors.primary[100]};
	}
	.chevron-down {
		color: ${({ theme: { colors } }) => colors.primary[100]};
		width: 1.5rem;
		height: 1.5rem;
		@media screen and (max-width: 740px) {
			width: 1.2rem;
			height: 1.2rem;
		}
	}
`;

export const Option = styled.button`
	width: 100%;
	display: flex;
	padding: 1rem;
	background: ${({ theme: { colors } }) => colors.primary[400]};
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
`;

export const Text = styled.p`
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.base};
	font-weight: 300;
	user-select: none;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;
