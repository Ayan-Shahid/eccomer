import styled from "styled-components";

export const Wrapper = styled.article`
	position: relative;
	margin-right: 1rem;
`;

export const Currency = styled.p`
	margin-left: 0.7rem;
	line-height: 0;
	font-size: ${({ theme: { fonts } }) => fonts.base};
	flex: none;
`;

export const Flag = styled.figure`
	width: 2.5rem;
	flex: none;
	height: 2.5rem;
	border-radius: 50%;
	border: 0.15rem solid ${({ theme: { colors } }) => colors.tertiary[100]};
	transition: 0.3s ease-in;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	background: ${({ theme: { colors } }) => colors.primary[200]};
	margin: 0;
`;

export const SelectedCurrency = styled.article`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

interface DropDownProps {
	active?: "true" | string;
}

export const DropDown = styled.article<DropDownProps>`
	background: ${({ theme: { colors } }) => colors.primary[400]};
	width: fit-content;
	&.noData {
		justify-content: center;
		align-items: center;
	}
	transition: 0.3s ease-in;
	opacity: ${({ active }) => (active === "true" ? "1" : "0")};
	height: 15rem;
	width: 25rem;
	position: absolute;
	overflow-y: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	top: 5rem;
	display: flex;
	flex-direction: column;
	right: 0;
	border-radius: ${({ theme: { fonts } }) => fonts["2xs"]};
	border: none;
`;

export const DropDownItem = styled.article`
	display: flex;
	align-items: center;
	user-select: none;
	padding: 0.7rem;
	flex: none;
	overflow: hidden;
	transition: 0.3s ease-in;

	cursor: pointer;
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[200]};
		& > ${Flag} {
			background: ${({ theme: { colors } }) => colors.primary[400]};
		}
	}

	border: none;
	& > ${Flag} {
		background: ${({ theme: { colors } }) => colors.primary[300]};
		width: 2.5rem;
		height: 2.5rem;
	}
`;
