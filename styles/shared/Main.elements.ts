import styled from "styled-components";

export const Layout = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	display: grid;
	background: ${({ theme: { colors } }) => colors.dark[100]};
	color: ${({ theme: { colors } }) => colors.light[100]};
	grid-template-rows: auto 1fr;
	grid-template-columns: auto 1fr;
`;
