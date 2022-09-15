import styled from "styled-components";

export const Heading = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts.xl};
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.lg};
	}
`;

export const Main = styled.section`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	width: 100%;
	gap: 1rem;
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	margin: 0;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	line-height: 0;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;

export const UploadNewButton = styled.button`
	background: ${({ theme: { colors } }) => colors.success[300]};
	border-radius: 0.4rem;
	transition: 0.3s ease-in-out;
	padding: 1rem;
	display: flex;
	margin-left: 1rem;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: 0.15rem solid transparent;
	.icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		@media screen and (max-width: 740px) {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.success[400]};
	}

	&:focus {
		outline: 0.15rem solid ${({ theme: { colors } }) => colors.success[100]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.success[200]};
	}
	&:disabled {
		background: ${({ theme: { colors } }) => colors.tertiary[300].concat("0a")};
		cursor: not-allowed;
	}
`;

export const CancelButton = styled(UploadNewButton)`
	background: ${({ theme: { colors } }) => colors.warning[300]};
	${Text} {
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
	}
	&:hover {
		background: ${({ theme: { colors } }) => colors.warning[400]};
	}
	&:focus {
		outline-color: ${({ theme: { colors } }) => colors.warning[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.warning[200]};
	}
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	& > ${Text} {
		flex: 1;
	}
`;
