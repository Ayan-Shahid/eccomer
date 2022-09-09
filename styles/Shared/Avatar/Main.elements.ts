import Image from "next/image";
import styled from "styled-components";

interface WrapperProps {
	size?: string;
}

export const Wrapper = styled.figure<WrapperProps>`
	margin: 0;
	padding: 0;
	height: ${({ size }) => size || "2.5rem"};
	width: ${({ size }) => size || "2.5rem"};
	background: ${({ theme: { colors } }) => colors.primary[200]};
	border-radius: 50%;
	transition: 0.3s ease-in;
	position: relative;
	flex: none;
	display: flex;
	align-items: center;
`;

export const Photo = styled(Image)`
	border-radius: 50%;
`;

export const Badge = styled.span`
	position: absolute;
	background: rgb(100, 255, 150);
	height: 25%;
	transition: 0.3s ease-in;
	right: 0;
	bottom: 0;
	border-radius: 50%;
	width: 25%;
	border: 0.15rem solid transparent;
`;
