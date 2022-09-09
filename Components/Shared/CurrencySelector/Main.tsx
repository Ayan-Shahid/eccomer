/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Context } from "Context/Provider";
import { useBoolean } from "Hooks";
import { NoData } from "Illustrations";
import Image from "next/image";

import React, {
	FunctionComponent,
	memo,
	useContext,
	useEffect,
	useState,
} from "react";
import * as Styled from "styles/Shared/CurrencySelector/Main.elements";
import * as Shared from "styles/Shared/Loaders/Skeletons.elements";

interface MainProps {
	countriesList?:
		| {
				currencies: { [key: string]: { name: string } };
				flags: { png: string };
		  }[]
		| null;
}

const Main: FunctionComponent<MainProps> = ({ countriesList }: MainProps) => {
	const { dispatch } = useContext(Context);
	const { setFalse, setTrue, state } = useBoolean();
	const [selectedCountry, setSelectedCountry] = useState<number>(0);
	const currencyName = countriesList
		? Object.keys(
				countriesList?.map(({ currencies }) => currencies)[selectedCountry]
		  )[0]
		: null;

	const selectCurrency = (index: number) => {
		setSelectedCountry(index);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted)
			dispatch({
				type: "SET_CURRENCY",
				payload: { currency: currencyName, cart: null },
			});

		return () => {
			isMounted = false;
		};
	}, [selectedCountry]);

	return (
		<Styled.Wrapper>
			<Styled.SelectedCurrency>
				{countriesList && countriesList.length > 0 ? (
					<Styled.Currency>{currencyName}</Styled.Currency>
				) : (
					<Shared.RectangleSkeleton
						width="1.5rem"
						height="1rem"
						borderRadius="0.2rem"
					/>
				)}
				{countriesList && countriesList?.length > 0 ? (
					<Styled.Flag onMouseEnter={setTrue}>
						<Image
							alt="flag"
							layout="fill"
							src={countriesList[selectedCountry].flags.png}
						/>
					</Styled.Flag>
				) : (
					<Shared.CircleSkeleton />
				)}
			</Styled.SelectedCurrency>
			<Styled.DropDown
				className={countriesList && countriesList.length > 0 ? "" : "noData"}
				onMouseLeave={setFalse}
				active={state.toString()}
			>
				{countriesList && countriesList.length > 0 ? (
					countriesList.map(({ currencies, flags }, index) => {
						const currency = Object.keys(currencies);
						return (
							<Styled.DropDownItem
								onClick={() => selectCurrency(index)}
								key={index}
							>
								<Styled.Flag>
									{flags ? (
										<Image alt="flag" layout="fill" src={flags.png} />
									) : null}
								</Styled.Flag>
								<Styled.Currency>
									{currencies[currency[0]]?.name}
								</Styled.Currency>
							</Styled.DropDownItem>
						);
					})
				) : (
					<NoData />
				)}
			</Styled.DropDown>
		</Styled.Wrapper>
	);
};

export default memo(Main);
