import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Provider from "Context/Provider";
import ToastProvider from "Context/ToastProvider";
import type { AppProps } from "next/app";
import Global from "styles/Global";
import Theme from "Theme/Theme";

const stripePromise = loadStripe(
	"pk_test_51Imi4uC6A42VxwGc2Qf1TPViSMZfSHMyj1SwtUZXX3a6mWCRZhE0mVrSqPr9YNLvR4rrqU4t9O76SZ6s5boaSYnP00mSguz78e"
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Elements stripe={stripePromise}>
				<Provider>
					<ToastProvider>
						<Global />
						<Component {...pageProps} />
					</ToastProvider>
				</Provider>
			</Elements>
		</Theme>
	);
}

export default MyApp;
