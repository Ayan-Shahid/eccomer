import styled from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 3rem 5em;

	@media screen and (max-width: 740px) {
		flex-direction: column;
		padding: 5em 3rem;
	}
	@media screen and (max-width: 500px) {
		padding: 1rem 2rem;
	}
`;

export const Aside = styled.section`
	width: 100%;
	padding: 0 3rem;
	@media screen and (max-width: 740px) {
		padding: 3rem 0;
	}
`;
