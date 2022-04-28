import styled from "styled-components";

export const Layout = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	background: ${({ theme: { colors } }) => colors.dark[100]};
	color: ${({ theme: { colors } }) => colors.light[100]};
`;
