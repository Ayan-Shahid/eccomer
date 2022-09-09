/* eslint-disable react-hooks/exhaustive-deps */
import { Auth } from "Components/Auth";
import { Filters, List } from "Components/Home";
import { SideBar, TopBar } from "Components/Shared";
import { Context } from "Context/Provider";
import { auth } from "Database/config";
import { getCountriesAndCities } from "getCountriesAndCities";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import * as Styled from "styles/Home/index.elements";

export const getStaticProps: GetStaticProps = async () => {
	const { countries, countriesCities, countriesInfo, exchangeRates } =
		await getCountriesAndCities();
	return {
		props: {
			countries: countries || null,
			countriesInfo: countriesInfo || null,
			countriesCities: countriesCities || null,
			exchangeRates: exchangeRates || null,
		},
	};
	//
};

const Home: NextPage<InferGetStaticPropsType<GetStaticProps>> = ({
	countries,
	countriesInfo,
	countriesCities,
	exchangeRates,
}) => {
	const { dispatch } = useContext(Context);
	useEffect(() => {
		let isMounted = true;
		if (isMounted)
			dispatch({
				type: "SET_EXCHANGE_RATES",
				payload: { cart: null, exchangeRates: exchangeRates.rates },
			});

		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<>
			<Head>
				<title>Eccommer</title>
			</Head>

			{auth.currentUser ? (
				<Styled.Wrapper>
					<SideBar />
					<Styled.Main>
						<TopBar currenciesList={countries || null} />
						<Filters />
						<List />
					</Styled.Main>
				</Styled.Wrapper>
			) : (
				<Auth
					countries={countriesInfo || null}
					cities={countriesCities || null}
				/>
			)}
		</>
	);
};

export default Home;
