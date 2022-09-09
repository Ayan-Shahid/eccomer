import { Auth } from "Components/Auth";
import { Main } from "Components/Settings";
import { SideBar, TopBar } from "Components/Shared";
import { auth } from "Database/config";
import React from "react";
import * as Styled from "styles/Settings/index.elements";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getCountriesAndCities } from "getCountriesAndCities";

export const getStaticProps: GetStaticProps = async () => {
	const { countries, countriesCities, countriesInfo } =
		await getCountriesAndCities();
	return {
		props: {
			countries: countries || null,
			countriesInfo: countriesInfo || null,
			countriesCities: countriesCities || null,
		},
	};
	//
};

const settings: NextPage<InferGetStaticPropsType<GetStaticProps>> = ({
	countries,
	countriesInfo,
	countriesCities,
}) => {
	return (
		<>
			<Head>
				<title>Eccommer - Settings</title>
			</Head>

			{auth.currentUser ? (
				<Styled.Wrapper>
					<SideBar />
					<Styled.Main>
						<TopBar currenciesList={countries || null} />
						<Main />
					</Styled.Main>
				</Styled.Wrapper>
			) : (
				<Auth
					cities={countriesCities || null}
					countries={countriesInfo || null}
				/>
			)}
		</>
	);
};

export default settings;
