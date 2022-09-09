import { auth } from "Database/config";
import { onAuthStateChanged } from "firebase/auth";
import React, {
	createContext,
	FunctionComponent,
	ReactNode,
	Reducer,
	useEffect,
	useReducer,
} from "react";
import { TAction, TContext, TState } from "types/Context";
import { reducer } from "./reducer";

export const Context = createContext<TContext>({
	state: { cart: [] },
	dispatch: () => null,
});

const Provider: FunctionComponent<{ children: ReactNode }> = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [state, dispatch] = useReducer<Reducer<TState, TAction>>(reducer, {
		cart: [],
	});
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => user);
		return unsubscribe;
	}, []);
	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	);
};

export default Provider;
