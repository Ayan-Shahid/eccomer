import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary[300]};
	display: flex;
	padding: 0.6rem;
	align-items: center;
	justify-content: flex-start;
`;

export const Chip = styled.button`
	background: ${({ theme: { colors } }) => colors.primary[200]};
	padding: 0.8rem 1rem;
	outline: none;
	border-radius: 1rem;
	transition: 0.3s ease-in-out;
	margin-right: 1rem;
	position: relative;
	cursor: pointer;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.secondary[300]};
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.sm};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	user-select: none;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.xs};
	}
`;

export const Item = styled.div`
	position: relative;
`;

export const Filters = styled.div`
	position: absolute;
	width: 10rem;
	height: fit-content;
	background: ${({ theme: { colors } }) => colors.primary[200]};
	border-radius: 0.4rem;
	display: flex;
	left: 0;
	top: 3rem;
	flex-direction: column;
	transition: 0.3s ease-in-out;
	&.active {
		opacity: 1;
		z-index: 20;
	}
	&.close {
		opacity: 0;
		z-index: -5;
	}
`;

export const Filter = styled.button`
	width: 100%;
	height: fit-content;
	align-items: flex-start;
	display: flex;
	padding: 1rem;
	outline: none;
	cursor: pointer;
	background: none;
	transition: 0.3s ease-in-out;
	color: ${({ theme: { colors } }) => colors.tertiary[300]};

	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.secondary[300]};
	}
`;
