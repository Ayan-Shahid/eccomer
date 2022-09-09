import axios from "axios";

export const getCountriesAndCities = async () => {
	const res = await axios
		.get("https://restcountries.com/v3.1/all?fields=currencies,flags,name")
		.catch((error) => error);
	const countriesInfoRes = await axios
		.get("https://countriesnow.space/api/v0.1/countries/states")
		.catch((error) => error);

	const countriesCitiesRes = await axios
		.get("https://countriesnow.space/api/v0.1/countries")
		.catch((error) => error);

	const exchangeRatesRes = await axios
		.get("https://api.apilayer.com/fixer/latest?base=USD", {
			headers: { apiKey: "bZcWdApNhtykMAXLE2cQFYYKBfhuTaBn" },
		})
		.catch((error) => error);

	const countriesCities = await countriesCitiesRes.data.data;
	const exchangeRates = await exchangeRatesRes.data;
	const countriesInfo = await countriesInfoRes.data.data;
	const countries = await res.data;

	return { countriesCities, countriesInfo, countries, exchangeRates };
};
