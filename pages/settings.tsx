import { Auth } from "Components/Auth";
import { Main } from "Components/Settings";
import { SideBar } from "Components/Shared";
import { auth } from "Database/config";
import React from "react";
import * as Styled from "styles/Settings/index.elements";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getCountriesAndCities } from "getCountriesAndCities";

export const getStaticProps: GetStaticProps = async () => {
	const { countriesCities, countriesInfo } = await getCountriesAndCities();
	return {
		props: {
			countriesInfo: countriesInfo || null,
			countriesCities: countriesCities || null,
		},
	};
	//
};

const settings: NextPage<InferGetStaticPropsType<GetStaticProps>> = ({
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
