/* eslint-disable indent */
import { Reducer } from "react";
import { TAction, TState } from "types/Context";

export const reducer: Reducer<TState, TAction> = (
	state: TState,
	action: TAction
): TState => {
	switch (action.type) {
		case "ADD":
			return {
				currency: state.currency,
				exchangeRates: state.exchangeRates,
				cart:
					state.cart && action.payload?.cart
						? [...state.cart, action.payload.cart]
						: null,
			};

		case "SET_CURRENCY":
			return {
				currency: action.payload.currency,
				cart: state.cart,
				exchangeRates: state.exchangeRates,
			};
		case "SET_EXCHANGE_RATES":
			return {
				currency: state.currency,
				cart: state.cart,
				exchangeRates: action.payload.exchangeRates,
			};
		default:
			return state;
	}
};
