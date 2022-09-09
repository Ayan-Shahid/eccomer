import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
	    padding: 0;
	    margin: 0;
        background: ${({ theme: { colors } }) => colors.primary[500]};
        color: ${({ theme: { colors } }) => colors.tertiary[500]};
        font-family: "Space Grotesk", sans-serif;
    }
    body {
        height: 100vh;

    }
    a {
	    color: inherit;
	    text-decoration: none;
    }

    * {
	    box-sizing: border-box;

    }
    input,button {
        border: 0;
    }
`;
