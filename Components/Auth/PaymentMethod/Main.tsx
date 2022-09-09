/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import * as Styled from "styles/Auth/Form/Main.elements";
import { Button, Input, Select } from "Components/Auth";
import { MapPin, User } from "react-feather";
import { useFormik } from "formik";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useUser } from "Hooks";
import { handleStripeCardNumber } from "./functions";
import { validationSchema } from "../PaymentMethod/validationSchema";

interface MainProps {
	countries?:
		| { name: string; iso2: string; states: { name: string }[] }[]
		| null;
	cities?: { country: string; cities: string[] }[] | null;
	isLoadingTrue?: () => void | null;
	isLoadingFalse?: () => void | null;
	setFormState?: Dispatch<
		SetStateAction<"authenticate" | "payment form" | "completed">
	> | null;
}

const Main: FunctionComponent<MainProps> = ({
	countries,
	cities,
	setFormState,
	isLoadingTrue,
	isLoadingFalse,
}: MainProps) => {
	const router = useRouter();
	const [buttonState, setButtonState] = useState<
		"default" | "authenticating" | "successfull" | "error"
	>("default");
	const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
	const [selectedState, setSelectedState] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [countriesList] = useState<string[] | null>(
		countries?.map((item) => item.name) || null
	);
	const [statesList, setStatesList] = useState<string[] | null>(null);
	const [citiesList, setCitiesList] = useState<string[] | null>(null);

	const stripe = useStripe();
	const elements = useElements();
	const user = useUser();

	const { getFieldMeta, getFieldProps, handleSubmit } = useFormik({
		initialValues: {
			cardHolderName: "",
			address: "",
			postalCode: "",
		},
		onSubmit: (values) => {
			handleStripeCardNumber(
				values.cardHolderName,
				values.address,
				values.postalCode,
				router,
				setButtonState,
				user?.customerId,
				stripe,
				elements,
				countries,
				selectedCountry,
				selectedCity,
				selectedState,
				setFormState
			).then(() => (isLoadingTrue ? isLoadingTrue() : null));
		},
		validationSchema: validationSchema,
	});

	const getStates = () => {
		if (countries)
			setStatesList(
				countries
					?.filter((item) => item.name === selectedCountry)
					.flatMap((item) => item.states)
					.map((item) => item.name)
			);
	};

	const getCities = () => {
		if (cities)
			setCitiesList(
				cities
					?.filter((item) => item.country === selectedCountry)
					.map((item) => item.cities)
					.flatMap((item) => item)
			);
	};
	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			getStates();
			getCities();
		}

		return () => {
			isMounted = false;
			if (isLoadingFalse) isLoadingFalse();
		};
	}, [selectedCountry]);

	return (
		<Styled.Wrapper onSubmit={handleSubmit}>
			<Styled.Title>Add Payment Method</Styled.Title>
			<Input
				leftIcon={<User className="left-icon" />}
				placeholder="Card Holder Name"
				{...getFieldMeta("cardHolderName")}
				{...getFieldProps("cardHolderName")}
			/>
			<CardElement
				options={{
					style: {
						base: { color: "white" },
						empty: {
							color: "white",
							"::placeholder": { color: "#fff5" },
							iconColor: "white",
						},
						invalid: {
							backgroundColor: "red",
						},
					},
				}}
				className="stripe-card-number-input"
			/>
			<Input
				placeholder="Address"
				leftIcon={<MapPin className="left-icon" />}
				{...getFieldMeta("address")}
				{...getFieldProps("address")}
			/>
			<Styled.FieldSet>
				<Select
					placeholder="Country"
					selected={selectedCountry}
					setSelected={setSelectedCountry}
					list={countriesList}
				/>
				<Select
					placeholder="State"
					list={statesList}
					selected={selectedState}
					setSelected={setSelectedState}
				/>
			</Styled.FieldSet>
			<Styled.FieldSet>
				<Select
					placeholder="City"
					list={citiesList}
					selected={selectedCity}
					setSelected={setSelectedCity}
				/>
				<Input
					leftIcon={<MapPin className="left-icon" />}
					{...getFieldMeta("postalCode")}
					{...getFieldProps("postalCode")}
					placeholder="Postal Code"
				/>
			</Styled.FieldSet>
			<Button text="Submit" type="submit" state={buttonState} />
		</Styled.Wrapper>
	);
};

export default Main;
