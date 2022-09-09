/* eslint-disable no-mixed-spaces-and-tabs */
import { Dispatch } from "react";

type Product = {
	id: string;
	name: string;
	price: number;
	quantity: number;
	photoUrl: string;
	shippingPrice: number;
};

export type TState = {
	cart: Product[] | null;
	currency?: string | null;
	exchangeRates?: { [key: string]: number } | null;
};

type Payload = {
	cart: Product | null;
	currency?: string | null;
	exchangeRates?: { [key: string]: number } | null;
};

export type TAction = {
	payload: Payload;
	type: "ADD" | "SET_CURRENCY" | "SET_EXCHANGE_RATES";
};
export type TContext = {
	state: TState;
	dispatch: Dispatch<TAction> | (() => void);
};
