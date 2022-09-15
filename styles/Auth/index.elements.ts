import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	flex: 1;
	overflow: hidden;
	position: absolute;
	top: 0;
	&.active {
		z-index: 10;
		opacity: 1;
	}
	&.close {
		z-index: -2;
		opacity: 0;
	}
	@media screen and (max-width: 650px) {
		flex-direction: column;
		overflow: scroll;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const Forms = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
`;

export const TimeLineCircle = styled.div`
	width: 1rem;
	height: 1rem;
	overflow: hidden;
	border-radius: 50%;
	@media screen and (max-width: 740px) {
		width: 0.8rem;
		height: 0.8rem;
	}
	position: relative;
	background: ${({ theme }) => theme.colors.tertiary[100]};
	&::before {
		background: ${({ theme }) => theme.colors.success[300]};
		content: "";
		position: absolute;
		left: 0;
		height: 100%;
		transition: 0.3s ease-in-out;
		border-radius: 5rem;
		width: 0;
		top: 0;
	}
`;
export const TimeLineCircle2 = styled(TimeLineCircle)``;
export const TimeLineState = styled.p`
	margin: 0;
	position: absolute;
	top: 1rem;
	left: -2rem;
	right: auto;
	font-size: ${({ theme: { fonts } }) => fonts.sm};
	color: ${({ theme }) => theme.colors.tertiary[100]};
	font-weight: 500;
	@media screen and (max-width: 740px) {
		font-size: ${({ theme: { fonts } }) => fonts.xs};
	}
	&:nth-child(2) {
		left: auto;
		right: -2rem;
	}
`;

export const TimeLine = styled.article`
	position: relative;
	height: 0.2rem;
	display: flex;
	align-items: center;
	transition: 0.3s ease-in-out;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.tertiary[100]};
	&::before {
		background: ${({ theme }) => theme.colors.success[300]};
		content: "";
		position: absolute;
		left: 0;
		transition: 0.3s ease-in-out;

		height: 100%;
		border-radius: 5rem;
		width: 0;
		top: 0;
	}
`;

export const TimeLineArea = styled.div`
	margin: 0 10rem;
	margin-top: 5rem;
	@media screen and (max-width: 1200px) {
		margin: 0 5rem;
	}

	@media screen and (max-width: 740px) {
		margin: 0 2rem;
	}
	@media screen and (max-width: 650px) {
		margin: 2rem 3.5rem;
	}
	${TimeLine}.paymentmethod::before {
		width: 50%;
		transition-delay: 0.35s;
	}
	${TimeLine}.authentication::before {
		width: 0;
	}
	${TimeLine}.completed::before {
		width: 100%;
	}
	${TimeLineCircle}.paymentmethod::before {
		width: 100%;
	}
	${TimeLineCircle}.authentication::before {
		width: 0;
	}
	${TimeLineCircle}.completed::before {
		width: 100%;
	}
	${TimeLineCircle2}.completed::before {
		width: 100%;
		transition-delay: 0.35s;
	}
	${TimeLineCircle2}.unfinished::before {
		width: 0;
	}
`;

export const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);

	}
`;

export const Loading = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Spinner = styled.span`
	background: transparent;
	border: 0.4rem solid ${({ theme: { colors } }) => colors.primary[400]};
	border-top: 0.4rem solid ${({ theme: { colors } }) => colors.primary[500]};
	border-radius: 50%;

	animation: 0.5s infinite ${spin} ease-in-out;
	transition: 0.3s ease-in-out;
	width: 3rem;
	height: 3rem;
	flex: none;
`;
