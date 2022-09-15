import styled from "styled-components";

export const Wrapper = styled.form`
	display: flex;
	flex: 1;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 10rem;
	@media screen and (max-width: 1200px) {
		padding: 0 5rem;
	}
	@media screen and (max-width: 740px) {
		padding: 0 2rem;
	}
	@media screen and (max-width: 740px) {
		padding: 2rem;
	}
	.form-input-wrapper,
	.form-button {
		margin-top: 2rem;
	}
	.stripe-card-number-input {
		padding: 1rem;
		width: 100%;
		background: ${({ theme: { colors } }) => colors.primary[400]};
		border-radius: 0.3rem;
		margin-top: 2rem;
		outline: 0.1rem solid transparent;
		transition: 0.3s ease-in-out;
		font-size: ${({ theme: { fonts } }) => fonts.base};
		color: ${({ theme: { colors } }) => colors.tertiary[100]};
		font-weight: 300;
		@media screen and (max-width: 740px) {
			font-size: ${({ theme: { fonts } }) => fonts.sm};
		}
	}
`;

export const Title = styled.h4`
	font-size: ${({ theme: { fonts } }) => fonts["2xl"]};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.xl};
	}
`;

export const Text = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	margin: 0;
	font-weight: 300;
	margin-top: 1rem;
	align-self: center;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
`;

export const Link = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.base};
	align-self: center;
	color: ${({ theme: { colors } }) => colors.success[300]};
	font-weight: 700;
	margin-top: 1rem;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

/* eslint-disable indent */

export const Button = styled.button`
	background: transparent;
	color: ${({ theme: { colors } }) => colors.tertiary[100]};
	padding: 1rem;
	border-radius: 0.3rem;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	outline: 0.1rem solid ${({ theme: { colors } }) => colors.primary[100]};
	font-weight: 700;
	display: flex;
	align-items: center;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.sm};
	}
	margin-top: 1rem;
	.google-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}
	justify-content: center;

	&:hover:not(:focus):not(:disabled) {
		background-color: ${({ theme: { colors } }) => colors.primary[400]};
	}
	&:active:not(:disabled) {
		background-color: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus:not(:active) {
		background-color: ${({ theme: { colors } }) => colors.primary[400]};
		outline: 0.1rem solid ${({ theme: { colors } }) => colors.primary[100]};
	}
	&:disabled {
		cursor: not-allowed;
		background: ${({ theme: { colors } }) => colors.tertiary[300].concat("66")};
		color: ${({ theme: { colors } }) => colors.tertiary[300]};
	}
`;

export const FieldSet = styled.div`
	display: flex;
	padding: 0;
	border: none;
	gap: 2rem;
`;
export const DataList = styled.datalist`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	border: 1rem solid red;
`;
