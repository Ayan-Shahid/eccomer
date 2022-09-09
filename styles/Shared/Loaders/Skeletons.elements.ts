import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0% {
    background-color: hsl(240, 39%, 24%);
  }
  100% {
    background-color: hsl(240, 39%, 19%);
  }
`;

export const CircleSkeleton = styled.span<{
	size?: string;
}>`
	width: ${({ size }) => size || "2.5rem"};
	height: ${({ size }) => size || "2.5rem"};
	border-radius: 50%;
	position: relative;
	flex: none;
	overflow: hidden;
	&.unactive {
		display: none;
	}
	animation: ${shimmer} 1s infinite alternate;
`;

export const RectangleSkeleton = styled(CircleSkeleton)<{
	width?: string;
	height?: string;
	borderRadius?: string;
}>`
	width: ${({ width }) => width || "2.5rem"};
	height: ${({ height }) => height || "2.5rem"};
	border-radius: ${({ borderRadius }) => borderRadius || "2.5rem"};

	background: ${({ theme: { colors } }) => colors.primary[300]};
	position: relative;
`;
