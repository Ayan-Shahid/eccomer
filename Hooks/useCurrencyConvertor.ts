import { Context } from "Context/Provider";
import { useContext } from "react";

const useCurrencyConvertor = (price: number) => {
	const {
		state: { exchangeRates, currency },
	} = useContext(Context);

	const productPrice = (
		exchangeRates && currency ? price * exchangeRates[currency] : 0
	).toFixed();

	return parseInt(productPrice);
};

export default useCurrencyConvertor;
