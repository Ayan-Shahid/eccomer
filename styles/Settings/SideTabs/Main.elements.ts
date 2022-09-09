import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 12rem;
	flex: none;
	border-right: 0.1rem solid ${({ theme: { colors } }) => colors.tertiary[100]};
	overflow: hidden;
	justify-content: center;
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	user-select: none;
	margin: 0;
	font-weight: 300;
	line-height: 0;
	transition: 0.3s ease-in-out;
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

	border: none;
	outline: none;
	cursor: pointer;
	.item-icon {
		width: 1rem;
		height: 1rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		margin-right: 0.8rem;
		transition: 0.3s ease-in-out;
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
