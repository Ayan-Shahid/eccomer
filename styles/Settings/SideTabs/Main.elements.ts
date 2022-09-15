import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 12rem;
	flex: none;
	border-right: 0.1rem solid ${({ theme: { colors } }) => colors.tertiary[100]};
	overflow: hidden;
	justify-content: center;
	@media screen and (max-width: 740px) {
		flex-direction: row;
		width: 100%;
		border-bottom: 0.1rem solid
			${({ theme: { colors } }) => colors.tertiary[100]};
		border-right: none;
		overflow: scroll;
		justify-content: flex-start;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	user-select: none;
	margin: 0;
	font-weight: 300;
	line-height: 0;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;
export const Item = styled.button`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	transition: 0.3s ease-in-out;
	background: none;
	border-top-left-radius: 0.4rem;
	border-bottom-left-radius: 0.4rem;

	margin: 0.5rem 0;
	@media screen and (max-width: 740px) {
		margin: 0 0.5rem;
		border-top-left-radius: 0.4rem;
		border-top-right-radius: 0.4rem;

		border-bottom-left-radius: 0;
	}
	border: none;
	outline: none;
	cursor: pointer;
	.item-icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		margin-right: 0.8rem;
		transition: 0.3s ease-in-out;
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.tertiary[100]};
		${Text},.item-icon {
			color: ${({ theme: { colors } }) => colors.tertiary[500]};
		}
	}
`;
