import "../styles/globals.css";
import type { AppProps } from "next/app";
import Theme from "theme/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	);
};

export default MyApp;
