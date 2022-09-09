import styled from "styled-components";

export const Wrapper = styled.section`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	padding: 2rem;
	margin-right: 2rem;
	width: 30%;
	display: flex;
	flex: none;
	height: 100%;
	border-radius: 0.5rem;
	flex-direction: column;
	.paymentMethodCard {
		cursor: pointer;
		transition: 0.3s ease-in-out;
		border: 0.1rem solid ${({ theme: { colors } }) => colors.primary[300]};

		&:hover {
			background: ${({ theme: { colors } }) => colors.primary[200]};
			& > figure {
				background: ${({ theme: { colors } }) => colors.primary[100]};
			}
		}
		&:active {
			background: ${({ theme: { colors } }) => colors.primary[300]};

			& > figure {
				background: ${({ theme: { colors } }) => colors.primary[200]};
			}
		}
		background: ${({ theme: { colors } }) => colors.primary[300]};
		& > figure {
			background: ${({ theme: { colors } }) => colors.primary[200]};
			transition: 0.3s ease-in-out;
		}
		&.selected {
			border: 0.1rem solid ${({ theme: { colors } }) => colors.secondary[300]};
		}
	}
`;

export const RadioButton = styled.button`
	border: none;
	outline: none;
	background: none;
	border-radius: 50%;
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1rem;
	flex: none;
	width: 1rem;
	transition: 0.3s ease-in-out;
	margin-left: 1rem;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
	&.inactive {
		border: 0.1rem solid ${({ theme: { colors } }) => colors.secondary[300]};
		background: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&.active {
		background: ${({ theme: { colors } }) => colors.secondary[300]};
		border: 0.15rem solid ${({ theme: { colors } }) => colors.secondary[300]};
		&::before {
			transition: 0.3s ease-in-out;
			content: "";
			width: 50%;
			height: 50%;
			border-radius: 50%;
			background: ${({ theme: { colors } }) => colors.tertiary[100]};
			position: absolute;
		}
	}
`;

export const ListItem = styled.div`
	display: flex;
	flex: none;
	align-items: center;
`;

export const List = styled.div`
	width: 100%;
	overflow: scroll;
	height: 4.2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Heading = styled.h5`
	font-size: ${({ theme: { fonts } }) => fonts["xl"]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	user-select: none;
`;

export const Row = styled.article`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;
`;

export const Title = styled.h6`
	font-size: ${({ theme: { fonts } }) => fonts.lg};
	font-weight: 300;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	user-select: none;
`;
export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.md};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;
	user-select: none;
`;
